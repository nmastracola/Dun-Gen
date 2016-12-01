// INITILIZE SERVICE
// ============================================================
angular.module("scribe").service("characterCreationService", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getCharacter = function(id) {
    var query = "";
    if (id) query = '?_id=' + id;
    return $http({
      method: 'GET',
      url: '/character' + query
    }).then(function(response) {
      if (response.data.length < 2) return response.data[0];
      return response.data;
    });
  };
  this.characterCreationObject = {
    static: {
        userId: "",
        playerName: "",
        characterName: "",
        campaign: "",
        race: "",
        classes: [{
            class: "",
            level: ""
        }],
        alignment: "",
        experiance: ""
    },
    core: {
        strength: "",
        strengthModifier: "",
        dexterity: "",
        dexterityModifier: "",
        constitution: "",
        constitutionModifier: "",
        intelligence: "",
        intelligenceModifier: "",
        wisdom: "",
        wisdomModifier: "",
        charisma: "",
        charismaModifier: "",
        armorClassModifier: "",
        initiativeModifier: "",
        speedModifier: "",
        charismaModifier: "",
        fortitudeMacigModifier: "",
        fortitudeMiscellaneousModifier: "",
        reflexMacigModifier: "",
        reflexMiscellaneousModifier: "",
        willMacigModifier: "",
        willMiscellaneousModifier: "",
        currentHitPoints: "",
        maxHitPoints: "",
        HitPointsModifier: "",
        wounds: "",
        speeds: {
            movementType: "",
            movementSpeed: ""
        }
    },
    weapons: [{
        name: "",
        type: "",
        subtype: "",
        name: "",
        cost: null,
        damage: {
            die: [null],
            number: [null]
        },
        critical: {
            threshold: null,
            multiplier: null
        },
        range: null,
        weight: null,
        damagetype: {
          blunt: FALSE,
          piercing: FALSE,
          slashing: FALSE
        },
        special: {
            brace: FALSE,
            disarm: FALSE,
            double: FALSE,
            monk: FALSE,
            nonlethal: FALSE,
            reach: FALSE,
            trip: FALSE
        },
        description: "",
        equiped: FALSE,
        primary: FALSE,
        offhand: FALSE,
        ammunition: null,
        weaponAttackBonus: null,
        damageAttackBonus: null,
        notes: ""
    }],
    skills: [{
        name: "",
        classSkill: FALSE,
        ranks: null,
        abilityModifier: null,
        miscellaneousModifier: null,
        total: null
    }],
    spells: [{
        knownSpells: [{
            name: "",
            spellTracker: null
        }],
    }],
    feats: [{
        name: "",
        known: FALSE
    }],
    abilities: [{
        name: "",
        known: FALSE
    }],
    equipment: [{
        armorClassItems: [{
            Name: "",
            Cost: null,
            ArmorShieldBonus: null,
            MaximumDexBonus: null,
            ArmorCheckPenalty: null,
            ArcanespellFailureChance: null,
            EquiptSpeed30: null,
            EquiptSpeed20: null,
            Weight: null,
            type: "",
            description: ""
        }],
        gear: {
            Item: "",
            Cost: null,
            Weight: null,
            category: "",
            description: ""
        },
        wealth: {            type: number        }
    }],
    customization: [{
        description: ""
    }],
    journal: "",
    menu: {
        colorScheme: null,
        portrait: ""
    }
  }
  this.createCharacter = function(data) {
    return $http({
      method: 'POST',
      url: '/character',
      data: data
    }).then(function(response) {
      return response;
    });
  };
  this.editCharacter = function(id, data) {
    return $http({
      method: 'PUT',
      url: "/character/" + id,
      data: data
    }).then(function(response) {
      return response;
    });
  };
  this.deleteCharacter = function(id) {
    return $http({
      method: 'DELETE',
      url: '/character/' + id
    }).then(function(response) {
      return response;
    });
  };
  // OTHER FUNCTIONS
  // ============================================================

});
