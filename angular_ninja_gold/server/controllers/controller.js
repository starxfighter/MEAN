module.exports = {

    farm: function(req, res){
        money = 0;
        money = Math.floor(Math.random() * 11) + 10; 
        msg = "Earned " + money.toString() + " golds from the farm"
        data = {
            money : money,
            msg : msg  
        }
        return res.json({data:data})
    },

    house: function(req, res){
        money = 0;
        money = Math.floor(Math.random() * 4) + 2; 
        msg = "Earned " + money.toString() + " golds from the house"
        data = {
            money : money,
            msg : msg  
        }
        return res.json({data:data})
    },

    cave: function(req, res){
        money = 0;
        money = Math.floor(Math.random() * 6) + 5; 
        msg = "Earned " + money.toString() + " golds from the cave"
        data = {
            money : money,
            msg : msg  
        }
        return res.json({data:data})
    },

    casino: function(req, res){
        money = 0;
        chance = 0;
        money = Math.floor(Math.random() * 51) + 0; 
        chance  = Math.floor(Math.random() * 2); 
        if (chance == 0){
            money = money * -1;
            msg = "Lost " + money.toString() + " golds from the casino"
        }else{
            msg = "Earned " + money.toString() + " golds from the casino"  
        }
        data = {
            money : money,
            msg : msg  
        }
        return res.json({data:data})
    },


}