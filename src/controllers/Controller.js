import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Car from '../models/Car.js';

class Controller {
  static async run() {
    try {
      const userCarInput = await InputView.readCarInput();
      const parsedCarList = userCarInput.split(',');
      const CarList = parsedCarList.map(data => {
        const car = new Car(data);
        return car;
      });
      const game = await InputView.readGame();
      for (let i = 0; i < game; i += 1) {
        CarList.forEach(car => {
          car.move(car.name);
        });
      }
      console.log(CarList);
    } catch (error) {
      OutputView.print(error);
    }
  }
}

export default Controller;
