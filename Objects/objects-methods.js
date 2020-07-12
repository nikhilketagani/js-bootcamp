let restaurant ={
    name : 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        console.log(partySize);
let seatsLeft = this.guestCapacity- this.guestCount;

        return partySize<= seatsLeft;
    },
    seatParty: function(addParty){
this.guestCount=this.guestCount+addParty;

    },
    removeParty : function(removeGuestCount){
        this.guestCount=this.guestCount-removeGuestCount;
    }
}
// seatParty

// removeParty


restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
