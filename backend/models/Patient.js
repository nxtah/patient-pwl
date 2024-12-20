module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      doctor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      diagnosis: {
        type: DataTypes.TEXT,
      },
    });
  
    return Patient;
  };
  