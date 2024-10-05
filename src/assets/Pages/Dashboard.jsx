import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import Chart from "../Components/Charts";

const DashBoard = () => {
    return (
        <div>

            <div>
                <NavBar />

            </div>


            <div className="flex ">
                <div>
                    <SideBar />
                </div>
                <div className="mt-16">
                    <h4>This is the dashboard</h4>
                </div>

            </div>
            <div>
                <Chart />
            </div>



        </div>
    )
}
export default DashBoard;