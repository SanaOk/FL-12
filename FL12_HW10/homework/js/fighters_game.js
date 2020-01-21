function Fighter({name, damage, strength, agility, hp}) {
  const initialHp = hp;
  let wins = 0;
  let losses = 0;

  return {
    getName: () => {
      return name;
    },

    getDamage: () => {
      return damage;
    },

    getStrength: () => {
      return strength;
    },

    getAgility: () => {
      return agility;
    },

    getHealth: () => {
      return hp;
    },

    attack: function(defender) {
      const PERCENTS = 100;
      const ABS_ATTACK_SUCCESS = 100;
      const defenderIndexOfSuccess = Math.random() * PERCENTS;
      const fighterIndexOfSuccess = ABS_ATTACK_SUCCESS - (defender.getStrength() + defender.getAgility());

      if (defenderIndexOfSuccess > fighterIndexOfSuccess) {
        console.log(`${this.getName()} attack missed`);
      } else {
        console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
        defender.dealDamage(this.getDamage());
      }
    },

    logCombatHistory: function() {
      console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
    },

    heal: (healAmount) => {
      if (hp + healAmount > initialHp) {
        hp = initialHp;
      } else {
        hp += healAmount;
      }
    },

    dealDamage: (damageAmount) => {
      const minHp = 0;

      if (hp - damageAmount < minHp) {
        hp = minHp;
      } else {
        hp -= damageAmount;
      }
    },

    addWin: () => {
      wins++;
    },

    addLoss: () => {
      losses++;
    }
  };
}

function battle(...fighters) {
  const isDead = (fighter) => {
    if (!fighter.getHealth()) {
      console.log(`${fighter.getName()} is dead and can't fight.`);
      return true;
    }

    return false;
  };

  if (!isDead(fighters[0]) && !isDead(fighters[1])) {
    let attackerIndex = 0;

    while (fighters[0].getHealth() && fighters[1].getHealth()) {
      const attacker = fighters[attackerIndex];
      const defender = fighters[Number(!attackerIndex)];
      attacker.attack(defender);

      if (defender.getHealth() === 0) {
        console.log(`${attacker.getName()} has won!`);
        attacker.addWin();
        defender.addLoss();
      }

      attackerIndex = Number(!attackerIndex);
    }
  }
}
