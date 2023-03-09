import mockMap from './mock/days-schedule';
import { WeekScheduleCalendar } from './week-schedule-calendar';

function App() {
  return (
    <WeekScheduleCalendar map={mockMap}/>
  );
}

export default App;
