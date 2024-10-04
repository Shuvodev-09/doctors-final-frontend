import chair from '..//..//..//assets/images/chair 1.png';
import bannerbg from '..//..//..//assets/images/landing-bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="hero px-2 md:py-24"
    >
      <div className="hero-content justify-between flex-col lg:flex-row-reverse container">
        <img
          src={chair}
          className="md:w-[640px] lg:w-[700px] rounded-lg pb-10 lg:pb-0"
        />
        <div className="shadow-2xl bg-base-100 rounded-lg p-3 md:p-10 lg:p-4 lg:ml-20">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
