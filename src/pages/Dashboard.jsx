import Appointment from "../components/appointment/Appointment";
import DashboardPanel from "../components/dashboardPanel/DashboardPanel";
import DocumentTable from "../components/documentTable/DocumentTable";
import PatientSearch from "../components/patientSearch/PatientSearch";


const Dashboard = () => {
  return (
    <div className="container-fluid my-5">
      <PatientSearch />
      <Appointment />
      <DashboardPanel />
      <DocumentTable />
    </div>
  )
}   

export default Dashboard;