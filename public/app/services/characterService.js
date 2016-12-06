// INITILIZE SERVICE
// ============================================================
angular.module("scribe").service("characterService", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.createCharacter = function(characterData) {
    return $http({
      method: 'POST',
      url: '/character',
      data: characterData
    }).then(function(response) {
      return response;
    });
  };
  this.editCharacter = function(id, characterData) {
    return $http({
      method: 'PUT',
      url: "/character/" + id,
      data: characterData
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
  this.getUserCharacters = function(){
    return $http({
      method: 'GET',
      url: '/api/characters'
    }).then(function(response){
      return response.data
    })
  };
  // OTHER FUNCTIONS
  // ============================================================
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
        race: "",
        classes: [],
        alignment: "",
        experiance: ""
    },
    qualifications: [],
    core: {
        strength: "",
        dexterity: "",
        constitution: "",
        intelligence: "",
        wisdom: "",
        charisma: "",
        armorClassModifier: "",
        initiativeModifier: "",
        speedModifier: "",
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
        speeds: [{
            movementType: "",
            movementSpeed: ""
        }]
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
            blunt: false,
            piercing: false,
            slashing: false
        },
        special: {
            brace: false,
            disarm: false,
            double: false,
            monk: false,
            nonlethal: false,
            reach: false,
            trip: false
        },
        description: "",
        equiped: false,
        primary: false,
        offhand: false,
        ammunition: null,
        weaponAttackBonus: null,
        damageAttackBonus: null,
        notes: ""
    }],
    skills: [{
        name: "",
        classSkill: false,
        ranks: null,
        abilityModifier: null,
        miscellaneousModifier: null,
        total: null
    }],
    spells: [{
        knownSpells: [{
            name: "",
            spellTracker: null
        }]
    }],
    feats: [],
    abilities: [{
        name: "",
        known: false
    }],
    equipment: [{
        armorClassItems: [{
            Name: "",
            Cost: null,
            ArmorShieldBonus: null,
            MaximumDexBonus: null,
            ArmorCheckPenalty: null,
            ArcanespellFailureChance: null,
            EquipSpeed30: null,
            EquipSpeed20: null,
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
        wealth: null
    }],
    customization: {
      name: "",
      homeland: "",
      diety: "",
      age: "",
      height: "",
      weight: "",
      hair: "",
      eyes: "",
      misc: "",
      characterDescription: "",
      biography: ""
    },
    journal: "",
    menu: {
        colorScheme: null,
        portrait: ""
    }

  };
  var self = this;
  this.createCharacter = function(characterData) {
    return $http({
      method: 'POST',
      url: '/api/character',
      data: self.characterCreationObject
    }).then(function(response) {
      return response;
    });
  };
  this.editCharacter = function(id, characterData) {
    return $http({
      method: 'PUT',
      url: "/character/" + id,
      data: characterData
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
