import { PDFDownloadLink } from '@react-pdf/renderer'
import InvoicePdf from '../src/BillPDF/InvoicePdf'
import './App.css'
import UserInput from './userInput/UserInput'
import { Button } from '../src/src/@/components/ui/button'

function App() {


  return (
    <>

      <UserInput />
      <PDFDownloadLink document={<InvoicePdf />} fileName='invoice.pdf' className='flex justify-center mt-[-170px]'>
        {({ loading }) => (
          loading ? <Button>Loading Document</Button> : <Button>Download</Button>
        )}
      </PDFDownloadLink>

    </>
  )
}

export default App
