const mongoose = require('mongoose');
const Command = require('../models/command');

// Create a new command
exports.createCommand = async (req, res) => {

    const command = new Command({
        _id_commande: new mongoose.Types.ObjectId(),
        adresse_commande:req.body.adresse_commande,
        total_amount:req.body.total_amount
    });
    try {
        const newCommand = await command.save();
        const tab=req.body.tab;

        for(const item of tab)
        {
          item._id_commande=command._id_commande;
          item._id_orderitem= new mongoose.Types.ObjectId();
        }
        User.insertMany(tab).then( () => {
            console.log("Data inserted") // Success 
        }).catch( (error) => {
            console.log(error)     // Failure 
        });

        res.status(201).json(newCommand);

        

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

    
    

  };


// Get all commands
exports.getAllCommands = async (req, res) => {
  try {
    const commands = await Command.find();
    res.json(commands);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific command by ID
exports.getCommandById = async (req, res) => {
  try {
    const command = await Command.findById(req.params.commandId);
    if (!command) {
      return res.status(404).json({ error: 'Command not found' });
    }
    res.json(command);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing command
exports.updateCommand = async (req, res) => {
  try {
    const updatedCommand = await Command.findByIdAndUpdate(
      req.params.commandId,
      req.body,
      { new: true }
    );
    res.json(updatedCommand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a command
exports.deleteCommand = async (req, res) => {
  try {
    await Command.findByIdAndDelete(req.params.commandId);
    res.json({ message: 'Command deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
