// INITILIZE SERVICE
// ============================================================
angular.module("scribe").service("characterService", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.characterCreationObject = {
    static: {
        userId: "",
        playerName: "",
        characterName: "",
            // required: true
        campaign: "",
        race: "",
            // required: true
        classes: [{
          class: "Monk",
          level: 1
        }],
        alignment: "",
            // required: true
        experience: null
            // required: true
    },
    qualifications: [],
    core: {
        strength: null,
            // required: true
        tempStrength: null,
        dexterity: null,
            // required: true
        tempDexterity: null,
        constitution: null,
            // required: true
        tempConstitution: null,
        intelligence: null,
            // required: true
        tempIntelligence: null,
        wisdom: null,
            // required: true
        tempWisdom: null,
        charisma: null,
            // required: true
        tempCharisma: null,
        naturalArmorClass: null,
        miscArmorClass: null,
        miscInitiative: null,
        fortitudeBaseSave: null,
        fortitudeMagicModifier: null,
        fortitudeMiscellaneousModifier: null,
        reflexBaseSave: null,
        reflexMagicModifier: null,
        reflexMiscellaneousModifier: null,
        willBaseSave: null,
        willMagicModifier: null,
        willMiscellaneousModifier: null,
        currentHitPoints: null,
            // required: true
        temporaryHitPoints: null,
        maxHitPoints: null,
            // required: true
        hitPointsModifier: null,
        wounds: "",
        speeds: {
            movementType: "",
            movementSpeed: null
        }
    },
    weapons: [{
        name: "",
        type: "",
        subtype: "",
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
        damageType: {
            blunt: false,
            piercing: false,
            slashing: false,
            other: ""
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
        equipped: false,
        primary: false,
        offhand: false,
        ammunition: null,
        weaponAttackBonus: null,
        weaponDamageBonus: null,
        notes: ""
    }],
    skills: [{
        name: "",
            // required: true
        classSkill: false,
            // required: true
        ranks: null,
            // required: true
        primaryAttribute:"",
            // required: true
        attributeModifier: null,
            // required: true
        miscellaneousModifier: null,
        total: null,
            // required: true
        useUntrained: false,
            // required: true
        armorCheck: false,
            // required: true
        Description: ""
    }],
    spellsKnown: [{
        name: "",
        spellTracker: null
    }],
    feats: [{
        name: "",
        active: false,
        available: null
    }],
    abilities: [{
        name: "",
        active: false
    }],
    equipment: [{
        armorClassItems: [{
            name: "",
            cost: null,
            armorShieldBonus: null,
            maxDexBonus: null,
            armorCheckPenalty: null,
            arcaneSpellFailureChance: null,
            equipSpeed30: null,
            equipSpeed20: null,
            weight: null,
            type: "",
            description: ""
        }],
        gear: {
            item: "",
            cost: null,
            weight: null,
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
