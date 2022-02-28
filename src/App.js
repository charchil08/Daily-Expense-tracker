import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import AddNewTransaction from './components/AddNewTransaction';
import GlobalStyle from './components/styled/Global.styled';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <GlobalStyle/>
      <Header />
      <Container/> {/* we can directly also render Balance component*/}
      <IncomeExpenses/>
      <TransactionList/>
      <AddNewTransaction/>
    </GlobalProvider>
  );
}

export default App;
