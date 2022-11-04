const { Flight } = require("../models/Flight");
const {v4: uuid} = require("uuid");

exports.getFlights = async (req, res) => {
  //console.log("example")
  //res.send("flight api")
  try {
    const flight = Flight;
    res.status(200).json({
      message: "All Flight",
      flight: flight
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
//get a single flight

exports.getFlight = async (req, res) =>{
    try {
        let id = req.params.id;
        const flight = flight.find((flight) => flight.id ==id);
        res.status(200).json({
            message: "flight found",
            flight,
        });
    } catch (error) {
        
    }
}


//Create Flight

exports.CreateFlight = async (req, res) => {
  try {
    const flight = await req.body;
    flight.id = uuid();
    Flight.push(flight);
    
    res.status(201).json({
      message: "Flight Created",
      flight,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Update Flight

exports.Updateflight = async (res, req) =>{
    try {
        let id = req.params.id;
        const flight = Flight.find((flight) => flight.id === id);
        const {Title, Date, Price, Time} = await req.body;
        flight.Title = Title;
        flight.Date = Date;
        flight.Time = Time;
        flight.Price = Price;
        res.status(200).json({
            message: "Flight Updated",
            flight,
        });
    } catch (error) {
        res.status(500).json({message: error});
    }
}

exports.deleteFlight = async (req, res) =>{
    try {
        let id = req.params.id;
        const flight = Flight.find((flight) => flight.id ===id);
        Flight.splice(Flight.indexOf(flight),1);
        res.status(200).json({
            message:"Flight deleted",
            flight,
        });
    } catch (error) {
        ResizeObserverSize.status(500).json({message:error})
    }
}


