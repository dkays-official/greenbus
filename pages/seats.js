let seats = [];
let selectedSeats = [];
const MAX_SEATS = 5;
const MIN_SEATS = 2;
const SEAT_PRICE = 500; 

for (let i = 0; i < 24; i++) {
    seats.push({id: i, booked: false});
}


window.onload = function() {
    // Load booked seats from localStorage
    let bookedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || [];
    bookedSeats.forEach(id => {
        seats[id].booked = true;
    });

    let seatContainer = document.getElementById('seatContainer');
    seats.forEach(seat => {
        let seatElement = document.createElement('div');
        seatElement.id = `seat${seat.id}`;
        seatElement.innerHTML = `Seat ${seat.id + 1}`;
        if (seat.booked) {
            seatElement.classList.add('booked');
        }
        seatElement.onclick = function() { selectSeat(seat.id); };
        seatContainer.appendChild(seatElement);
    });
};

function selectSeat(id) {
    if (seats[id].booked) {
        alert('This seat is already booked.');
        return;
    }
    let seatElement = document.getElementById(`seat${id}`);
    if (selectedSeats.includes(id)) {
        selectedSeats = selectedSeats.filter(seatId => seatId !== id);
        seatElement.classList.remove('selected');
    } else {
        if (selectedSeats.length < MAX_SEATS) {
            selectedSeats.push(id);
            seatElement.classList.add('selected');
        } else {
            alert(`You can only select a maximum of ${MAX_SEATS} seats.`);
        }
    }
    document.getElementById('selectedSeats').innerHTML = `Selected Seats (${selectedSeats.length}): ${selectedSeats.map(id => id + 1).join(', ')}`;
    document.getElementById('total').innerHTML = `Total: <span>&#8377</span>${selectedSeats.length * SEAT_PRICE}`;
}

function bookSeats() {
    if (selectedSeats.length < MIN_SEATS) {
        alert(`You must select at least ${MIN_SEATS} seats.`);
        return;
    }
    selectedSeats.forEach(id => {
        seats[id].booked = true;
        document.getElementById(`seat${id}`).classList.add('booked');
    });

    localStorage.setItem('bookedSeats', JSON.stringify(selectedSeats));

    selectedSeats = [];
    alert('Seats booked successfully!');
    window.open('invoice.html', '_blank');
};
