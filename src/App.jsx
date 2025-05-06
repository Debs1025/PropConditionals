import Student from './components/Student.jsx'
import UserGreeting from './components/UserGreeting.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="John" />
      <Student name="Kazuha" age={21} isStudent={false} />
      <Student name="Momo" age={28} isStudent={true} />
      <Student name="Nayeon" age={29} isStudent={false} />
      <Student name="Tzuyu" age={25} isStudent={true} />
      <Student name="Jihyo" age={28} isStudent={false} />
    </>
  )
}