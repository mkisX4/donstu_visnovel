class PointAndClick extends RenJS.Plugin {
  config = null;
  infoPaC = null;

  onStart() {
    this.config = this.game.setup.pointAndClick;
    this.infoPaC = { removed: {}, added: {} };
    this.game.managers.logic.vars.pointAndClick = this.infoPaC;
  }

  onLoad(slot, data) {
    this.infoPaC = data.vars.pointAndClick;
  }

  onInit() {
    this.game.screenEffects.transition['PaCTransition'] = (from, to, position, scaleX) => {
      let room = to.name;
      if (this.config[room]) {
        for (const obj in this.config[room]) {
          if (this.infoPaC.removed[room] && this.infoPaC.removed[room][obj]) {
            continue;
          }
          const attr = this.config[room][obj].split(" ");
          let newObj = {
            name: obj,
            key: attr[0],
            x: parseInt(attr[1]) - to.width / 2,
            y: parseInt(attr[2]) - to.height / 2,
            scene: attr[3]
          }
          this.createObject(to, newObj);
        }
      }
      if (this.infoPaC.added[room]) {
        for (const obj in this.infoPaC.added[room]) {
          this.createObject(to, this.infoPaC.added[room][obj]);
        }
      }
      this.game.input.enabled = true;
      return this.game.screenEffects.transition.FADETOBLACK(from, to, position, scaleX);
    }
  }

  createObject(room, obj, transition) {
    if (!room.pointAndClick) {
      room.pointAndClick = {
        map: {},
        group: this.game.add.group()
      }
      room.addChild(room.pointAndClick.group);
    }

    let key = obj.key;
    if (key === 'home' || key === 'park' || key === 'blockHome' || key === 'blockPark') {
      const btn = this.game.add.button(obj.x, obj.y, key, async () => {
        if (!this.game.managers.story.interpreting) {
          room.pointAndClick.group.ignoreChildInput = true;
          if (key === 'home') {
            await this.game.managers.story.startScene('homeScene');
          } else if (key === 'park') {
            await this.game.managers.story.startScene('parkScene');
          }
          this.game.resolveAction();
        }
      }, this.game, 1, 0, 1, 0, room.pointAndClick.group);
      room.pointAndClick.map[obj.name] = btn;
    } else {
      this.game.add.sprite(obj.x, obj.y, key, null, room.pointAndClick.group);
    }

    if (transition) {
      btn.alpha = 0;
      this.game.screenEffects.transition.FADEIN(btn);
    } else {
      room.pointAndClick.group.ignoreChildInput = true;
    }
  }

  onCall(params) {
    const action = params.body.split(" ")[0];
    const obj = params.body.split(" ")[1];
    const infoPaC = this.game.managers.logic.vars.pointAndClick;
    const room = this.game.managers.background.current;

    if (params.body === 'activate') {
      room.pointAndClick.group.ignoreChildInput = false;
      this.game.resolveAction();
      return;
    }

    if (action === "remove") {
      if (obj in room.pointAndClick.map) {
        this.game.screenEffects.transition.FADEOUT(room.pointAndClick.map[obj]).then(() => {
          if (!infoPaC.removed[room.name]) {
            infoPaC.removed[room.name] = {};
          }
          infoPaC.removed[room.name][obj] = true;
          if (infoPaC.added[room.name] && infoPaC.added[room.name][obj]) {
            delete infoPaC.added[room.name][obj];
          }
          room.pointAndClick.map[obj].destroy();
          this.game.resolveAction();
        });
        return;
      }
    }

    if (action === "add") {
      if (!infoPaC.added[room.name]) {
        infoPaC.added[room.name] = {};
      }
      infoPaC.added[room.name][obj] = {
        name: params.name,
        key: params.key ? params.key : params.name,
        x: params.x - room.width / 2,
        y: params.y - room.height / 2,
        scene: params.scene
      }

      if (obj === 'park' && this.game.managers.logic.vars.playerPoints >= 10) {
        this.createObject(room, { ...infoPaC.added[room.name][obj], key: 'park' }, "FADE");
      } else {
        this.createObject(room, { ...infoPaC.added[room.name][obj], key: 'home' }, "FADE");
      }

      if (infoPaC.removed[room.name] && infoPaC.removed[room.name][obj]) {
        delete infoPaC.removed[room.name][obj];
      }
      this.game.resolveAction();
      return;
    }

    this.game.resolveAction();
  }
}

RenJSGame.addPlugin('PointAndClick', PointAndClick);


