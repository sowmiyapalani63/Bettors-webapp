// First, let's create a JavaScript file to handle the dynamic content loading
// Save this as app.js in the same directory as your HTML file

document.addEventListener("DOMContentLoaded", function () {
    // Get all sidebar menu items
    const menuItems = document.querySelectorAll('.list-group-item-action');

    // Store the main content area
    const pageContentArea = document.querySelector('.main-bg-color.container-fluid');

    // Create an object to store page content for each menu item
    const pageContents = {
        "Race Matrix": `
            <section class="dashboard w-100 d-flex flex-column gap-32">
                <div class="border border-radius-8">
                    <div class="py-20 px-40 border-bottom table-headding-bg">
                        <p class="body-2 fw-medium font-18 text-semibold">Race Matrix</p>
                    </div>
                    <div class="bg-white px-40 py-40">
                        <p>Race Matrix content goes here.</p>
                    </div>
                </div>
            </section>
        `,
        "My Bet Logbook":`
         <section class="dashboard w-100 d-flex flex-column gap-8">


                    <div class="border border-radius-8  ">
                        <div
                            class=" py-20 px-40 border-bottom table-headding-bg d-flex flex-md-row flex-column justify-content-between ">
                            <p class="  body-2 fw-medium font-18 text-semibold">My Bet Summary </p>

                        </div>
                        <div class="bg-white px-40 ">
                            <div class="py-32">
                                <div class=" d-flex flex-column gap-40">
                                    <div class="d-flex flex-row gap-8 font-12">
                                        <div
                                            class="w-48 h-30  bg-white d-flex flex-column justify-content-center border border-radius-4">
                                            <img src="./asssest/image/previousarrow.svg" alt="user"
                                                class="image img-fluid h-20" id="prevBtn">
                                        </div>
                                        <div id="carousel-container"
                                            class="d-flex flex-row gap-16 font-12 fw-medium carousal-container overflow-x-scroll">
                                            <!-- Your cards go here -->
                                            <div class="d-flex flex-column gap-16">
                                                <div
                                                    class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                                    <div>
                                                        21-Oct-2024
                                                    </div>
                                                    <div>
                                                        Monday
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-column gap-16">
                                                <div
                                                    class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                                    <div>
                                                        21-Oct-2024
                                                    </div>
                                                    <div>
                                                        Monday
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-column gap-16">
                                                <div
                                                    class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                                    <div>
                                                        21-Oct-2024
                                                    </div>
                                                    <div>
                                                        Monday
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-column gap-16">
                                                <div
                                                    class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                                    <div>
                                                        21-Oct-2024
                                                    </div>
                                                    <div>
                                                        Monday
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-column gap-16">
                                                <div
                                                    class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                                    <div>
                                                        21-Oct-2024
                                                    </div>
                                                    <div>
                                                        Monday
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-column gap-16">
                                                <div
                                                    class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                                    <div>
                                                        21-Oct-2024
                                                    </div>
                                                    <div>
                                                        Monday
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-column gap-16">
                                                <div
                                                    class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                                    <div>
                                                        21-Oct-2024
                                                    </div>
                                                    <div>
                                                        Monday
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-column gap-16">
                                                <div
                                                    class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                                    <div>
                                                        21-Oct-2024
                                                    </div>
                                                    <div>
                                                        Monday
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- More cards ... -->
                                        </div>
                                        <div
                                            class="w-48 h-30 bg-white d-flex flex-column justify-content-center border border-radius-4 ">
                                            <img src="./asssest/image/nextarrow.svg" alt="user" class="image h-20   "
                                                id="nextBtn">
                                        </div>
                                    </div>

                                    <div class="d-flex flex-column gap-16">
                                        <div class="py-32">
                                            <div class="d-flex flex-column gap-16">

                                                <div
                                                    class="body-2 fw-medium font-14 fw-medium d-flex flex-lg-row flex-column justify-content-between gap-20 flex-wrap ">
                                                    <p class="  body-2 fw-medium font-18 text-semibold">Planned </p>
                                                    <input type="search" placeholder="Search.."
                                                        class="border-radius-4 text-secondary p-12 border-color filter-input flex-grow-sm" />

                                                </div>

                                                <div class="overflow-x-auto border-radius-8">
                                                    <div style="overflow-x: auto;">
                                                        <table class="table border logbook-table">
                                                            <thead
                                                                class="bg-siderbar text-white border font-14 fw-medium">
                                                                <tr>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>#</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Date</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Course</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Number</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Time</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Time diff.</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Smart AI</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Total Horses</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bookies</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Back/Lay</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bet Planned On</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Runner</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Odds</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Stake</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Returns (Excl.Stake)</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Qualifying Loss</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Run Position</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>

                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bonus Triggered?</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Cash Profit/Loss</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Total Profit/Loss
                                                                                Est.</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Comments</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Action</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="font-14 fw-medium text-secondary">
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center">
                                                                    <td></td>
                                                                    <td colSpan="1"
                                                                        class="text-center body-2 fw-medium font-18 text-semibold  ">
                                                                        <span>Total</span>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column gap-16">
                                        <div class="py-32">
                                            <div class="d-flex flex-column gap-16">

                                                <div
                                                    class="body-2 fw-medium font-14 fw-medium d-flex flex-lg-row flex-column justify-content-between gap-20 flex-wrap ">
                                                    <p class="  body-2 fw-medium font-18 text-semibold">Actual
                                                    </p>
                                                    <input type="search" placeholder="Search.."
                                                        class="border-radius-4 text-secondary p-12 border-color filter-input flex-grow-sm" />

                                                </div>
                                                <div class="overflow-x-auto border-radius-8">
                                                    <div style="overflow-x: auto;">
                                                        <table class="table border logbook-table">
                                                            <thead
                                                                class="bg-siderbar text-white border font-14 fw-medium">
                                                                <tr>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>#</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Date</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Course</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Number</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Time</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Time diff.</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Smart AI</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Total Horses</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bookies</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Back/Lay</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bet Planned
                                                                                On</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Runner</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Odds</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Stake</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Returns
                                                                                (Excl.Stake)</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Qualifying
                                                                                Loss</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Run Position</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>

                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bonus
                                                                                Triggered?</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Cash
                                                                                Profit/Loss</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Total Profit/Loss
                                                                                Est.</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Comments</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Action</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="font-14 fw-medium text-secondary">
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center">
                                                                    <td></td>
                                                                    <td colSpan="1"
                                                                        class="text-center body-2 fw-medium font-18 text-semibold  ">
                                                                        <span>Total</span>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="d-flex flex-column gap-16">
                                        <div class="py-32">
                                            <div class="d-flex flex-column gap-16">

                                                <div
                                                    class="body-2 fw-medium font-14 fw-medium d-flex flex-lg-row flex-column justify-content-between gap-20 flex-wrap ">
                                                    <p class="  body-2 fw-medium font-18 text-semibold">
                                                        Scratched</p>
                                                    <input type="search" placeholder="Search.."
                                                        class="border-radius-4 text-secondary p-12 border-color filter-input flex-grow-sm" />

                                                </div>
                                                <div class="overflow-x-auto border-radius-8">
                                                    <div style="overflow-x: auto;">
                                                        <table class="table border logbook-table">
                                                            <thead
                                                                class="bg-siderbar text-white border font-14 fw-medium">
                                                                <tr>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>#</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Date</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Course</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Number</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Race Time</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Time diff.</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Smart AI</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Total Horses</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bookies</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Back/Lay</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bet Planned
                                                                                On</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Runner</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Odds</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Stake</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Returns
                                                                                (Excl.Stake)</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Qualifying
                                                                                Loss</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Run Position</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>

                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bonus
                                                                                Triggered?</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Cash
                                                                                Profit/Loss</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Total Profit/Loss
                                                                                Est.</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Comments</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Action</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="font-14 fw-medium text-secondary">
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center ">
                                                                    <td>1</td>
                                                                    <td>26/10/2024</td>
                                                                    <td>Ascot</td>
                                                                    <td>R1</td>
                                                                    <td>15:29</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="text-center">
                                                                    <td></td>
                                                                    <td colSpan="1"
                                                                        class="text-center body-2 fw-medium font-18 text-semibold  ">
                                                                        <span>Total</span>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
        `,
        "My Bookie Promo": `
         <section class="dashboard w-100 d-flex flex-column gap-8">
                    <div class="border rounded  font-14">
                        <div
                            class=" py-20 px-40 border-bottom table-headding-bg d-flex flex-md-row flex-column justify-content-between ">
                            <p class="  body-2 fw-medium font-18 text-semibold">Manage Promo </p>
                            <div class="d-flex flex-row gap-40 primary-text body-2 fw-medium font-18">
                                <p class=" ">New Promo</p>

                            </div>
                        </div>
                        <div class="bg-white px-40 py-40 d-flex flex-column gap-20 ">
                            <div class="py-20 d-flex flex-row flex-wrap justify-content-between gap-20">
                                <div class="d-flex align-items-center">
                                    <span class="font-16">Show</span>
                                    <select class="form-select mx-2 font-14" style="width: auto;">
                                        <option selected>10</option>
                                        <option>25</option>
                                        <option>50</option>
                                        <option>100</option>
                                    </select>
                                    <span class="font-16">entries</span>
                                </div>
                                <input type="search" placeholder="Search.."
                                    class="border-radius-4 text-secondary p-12 border-color filter-input flex-grow-sm" />
                            </div>
                            <div class="overflow-x-auto border-radius-8">
                                <div style="overflow-x: auto;">
                                    <table class="table border">
                                        <thead class="bg-siderbar text-white border font-14 fw-medium">
                                            <tr>
                                                <th>S No</th>
                                                <th>Race Date</th>
                                                <th>Promo Added On</th>
                                                <th>Status</th>
                                                <th>Created By</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="font-14 fw-medium text-secondary">
                                            <tr>
                                                <td>1</td>
                                                <td>21/10/2024</td>
                                                <td>21/10/2024</td>
                                                <td>Active</td>
                                                <td></td>
                                                <td><a href="./mangeBookiePromo.html" class=""><img
                                                            src="./asssest/image/editicon.svg" alt="" /></a></td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p class="mb-0 fon">Showing 1 to 10 of 357 entries</p>

                            <nav class="align-items-center">
                                <ul class="pagination mb-0  d-flex justify-content-center gap-24 border-0">
                                    <li class="page-item"><a class="page-link text-brandcolor border-0"
                                            href="#">Previous</a></li>
                                    <li class="page-item active "><a
                                            class="page-link text-white bg-siderbar text-white border-radius-4 "
                                            href="#">1</a></li>
                                    <li class="page-item"><a class="page-link text-brandcolor border-0"
                                            href="#">Next</a></li>
                                </ul>
                            </nav>


                        </div>
                    </div>
                </section>`
        ,
        "My Bookies": `
          <section class="dashboard w-100 d-flex flex-column gap-8">
                    <div class="border rounded  font-14">
                        <div
                            class=" py-20 px-40 border-bottom table-headding-bg d-flex flex-md-row flex-column justify-content-between ">
                            <p class="  body-2 fw-medium font-18 text-semibold">My Bookies </p>

                        </div>
                        <div class="bg-white px-40 py-40 d-flex flex-column gap-20 fw-medium">
                            <div class="py-20 d-flex flex-column flex-md-row flex-wrap justify-content-between gap-20">
                                <input type="search" placeholder="Search.."
                                    class="border-radius-4 text-secondary p-12 border-color filter-input flex-grow-md" />
                                <div class="d-flex gap-20 flex-column flex-md-row fw-medium font-14">
                                    <button class="body-4 btn text-white ">Save</button>
                                    <button
                                        class="body-4 btn bg-white border-radius-4 border-color-primary ">Add</button>
                                </div>
                            </div>
                            <div class="py-24 px-18 px-18  border-color border-radius-8 border  d-flex flex-column gap-20">
                                <form class="form-grid">
                                    <div>
                                        <label class="form-label text-semibold">Select Bookies</label>
                                        <select class="form-select">
                                            <option selected>Select option</option>
                                            <option>Bookie 1</option>
                                            <option>Bookie 2</option>
                                        </select>
                                    </div>


                                    <div>
                                        <label class="form-label text-semibold">Already have Account?</label>
                                        <select class="form-select">
                                            <option selected>Select option</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label class="form-label text-semibold">Account Open On</label>
                                        <input type="date" class="form-control">
                                    </div>

                                    <div>
                                        <label class="form-label text-semibold">Gubbed/Promo banned</label>
                                        <select class="form-select">
                                            <option selected>Select option</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>


                                    <div>
                                        <label class="form-label text-semibold">Banned On</label>
                                        <input type="date" class="form-control" disabled>
                                    </div>

                                    <div>
                                        <label class="form-label text-semibold">Days Active</label>
                                        <input type="text" class="form-control border-0 " value="0 Days">
                                    </div>


                                    <div>
                                        <label class="form-label text-semibold">Promo Vs Mug Ratio</label>
                                        <div class="d-flex align-items-center">
                                            <input type="number" class="form-control me-2" value="2">
                                            <span>:</span>
                                            <input type="number" class="form-control ms-2" value="1">
                                        </div>
                                    </div>

                                    <div class="full-width span-2">
                                        <label class="form-label text-semibold">Cause of Gub / Promo Banned (if
                                            known)</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </form>
                                <div>
                                    <a href="#"
                                        class="d-flex flex-row align-items-baseline gap-8 text-danger text-decoration-none fw-medium"><img
                                            src="./asssest/image/deleteicon.svg" alt="" /><span>Delete</span></a>
                                </div>
                            </div>
                            <div class="py-24 px-18 px-18  border-color border-radius-8 border  d-flex flex-column gap-20">
                                <form class="form-grid">
                                    <div>
                                        <label class="form-label text-semibold">Select Bookies</label>
                                        <select class="form-select">
                                            <option selected>Select option</option>
                                            <option>Bookie 1</option>
                                            <option>Bookie 2</option>
                                        </select>
                                    </div>


                                    <div>
                                        <label class="form-label text-semibold">Already have Account?</label>
                                        <select class="form-select">
                                            <option selected>Select option</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label class="form-label text-semibold">Account Open On</label>
                                        <input type="date" class="form-control">
                                    </div>

                                    <div>
                                        <label class="form-label text-semibold">Gubbed/Promo banned</label>
                                        <select class="form-select">
                                            <option selected>Select option</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>


                                    <div>
                                        <label class="form-label text-semibold">Banned On</label>
                                        <input type="date" class="form-control" disabled>
                                    </div>

                                    <div>
                                        <label class="form-label text-semibold">Days Active</label>
                                        <input type="text" class="form-control border-0 " value="0 Days">
                                    </div>


                                    <div>
                                        <label class="form-label text-semibold">Promo Vs Mug Ratio</label>
                                        <div class="d-flex align-items-center">
                                            <input type="number" class="form-control me-2" value="2">
                                            <span>:</span>
                                            <input type="number" class="form-control ms-2" value="1">
                                        </div>
                                    </div>

                                    <div class="full-width span-2">
                                        <label class="form-label text-semibold">Cause of Gub / Promo Banned (if
                                            known)</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </form>
                                <div>
                                    <a href="#"
                                        class="d-flex flex-row align-items-baseline gap-8 text-danger text-decoration-none fw-medium"><img
                                            src="./asssest/image/deleteicon.svg" alt="" /><span>Delete</span></a>
                                </div>
                            </div>

                            
                           
                        </div>
                    </div>
                </section>
        `,
        "My Notifications":`
          <section class="dashboard w-100 d-flex flex-column gap-8">
                    <div class="border rounded  font-14">
                        <div class=" py-20 px-40 border-bottom table-heading-bg">
                            <p class="  body-2 fw-medium font-18 text-semibold">My Settings </p>
                        </div>
                        <div class="bg-white px-40 py-40 d-flex flex-column gap-20 ">
                            <div class="py-20 d-flex flex-row flex-wrap justify-content-between gap-20">
                                <div class="d-flex align-items-center">
                                    <span class="font-16">Show</span>
                                    <select class="form-select mx-2 font-14" style="width: auto;">
                                        <option selected>10</option>
                                        <option>25</option>
                                        <option>50</option>
                                        <option>100</option>
                                    </select>
                                    <span class="font-16">entries</span>
                                </div>
                                <div class=" text-end">
                                    <input type="search" placeholder="Search.."
                                        class="border-radius-4 text-secondary p-12 border-color filter-input flex-grow-sm" />
                                </div>
                            </div>
                            <div class="overflow-x-auto border-radius-8">
                                <div style="overflow-x: auto;">
                                    <table class="table border">
                                        <thead class="bg-siderbar text-white border font-14 fw-medium">
                                            <tr>
                                                <th style="width: 5%;">#</th>
                                                <th style="width: 25%;">Date</th>
                                                <th style="width: 70%;">Message</th>
                                            </tr>
                                        </thead>
                                        <tbody class="font-14 fw-medium text-secondary">
                                            <tr>
                                                <td>1</td>
                                                <td>21/10/2024</td>
                                                <td class="px-16 py-20">Message will be displayed here. Message can be
                                                    sent here. Message
                                                    can be sent here</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p class="mb-0 fon">Showing 1 to 10 of 357 entries</p>

                            <nav class="align-items-center">
                                <ul class="pagination mb-0  d-flex justify-content-center gap-24 border-0">
                                    <li class="page-item"><a class="page-link text-brandcolor border-0"
                                            href="#">Previous</a></li>
                                    <li class="page-item active "><a
                                            class="page-link text-white bg-siderbar text-white border-radius-4 "
                                            href="#">1</a></li>
                                    <li class="page-item"><a class="page-link text-brandcolor border-0"
                                            href="#">Next</a></li>
                                </ul>
                            </nav>


                        </div>
                    </div>

                </section>
        `,
        "Racing Planner": `
            <section class="dashboard w-100 d-flex flex-column gap-32">
                <div class="border border-radius-8">
                    <div class="py-20 px-40 border-bottom table-headding-bg">
                        <p class="body-2 fw-medium font-18 text-semibold">Racing Planner</p>
                    </div>
                    <div class="bg-white px-40 py-40">
                        <p>Racing Planner content goes here.</p>
                    </div>
                </div>
            </section>
        `,
        "My Race Picks": `
            <section class="dashboard w-100 d-flex flex-column gap-32">
                <div class="border border-radius-8">
                    <div class="py-20 px-40 border-bottom table-headding-bg">
                        <p class="body-2 fw-medium font-18 text-semibold">My Race Picks</p>
                    </div>
                    <div class="bg-white px-40 py-40">
                        <p>My Race Picks content goes here.</p>
                    </div>
                </div>
            </section>
        `,
        "Profile": `
            <section class="dashboard w-100 d-flex flex-column gap-32">
                <div class="border border-radius-8  ">
                    <div class=" py-20 px-40 border-bottom table-headding-bg">
                        <p class="  body-2 fw-medium font-18 text-semibold">My Profile</p>
                    </div>
                    <div class="bg-white px-40">
                        <div class=" py-20  d-flex  justify-content-between align-items-center border-bottom flex-wrap gap-3">
                            <div class="d-flex gap-20">
                                <div>
                                    <img src="./asssest/image/profile.png" alt=" user" class="image w-100">
                                </div>
                                <div class="d-flex flex-column justify-content-center gap-8 font-18  fw-medium">
                                    <p class="text-secondary">SUNDARRAJAN</p>
                                    <p class="text-ternary">Australia, NSW</p>
                                </div>

                            </div>
                            <div class="d-flex gap-20 flex-column flex-md-row fw-medium font-14">
                                <button class="body-4 btn text-white ">Update Password</button>
                                <button class="body-4 btn text-white">Edit Profile</button>
                            </div>
                            
                        </div>
                        <div class="row py-40 g-5  font-16 fw-medium">
                            <div class="col-md-4 d-flex gap-8 flex-column">
                                <p class="table-sub-name text-ternary">First Name</p>
                                <p class="table-name text-secondary">SUNDARRAJAN</p>
                            </div>
                            <div class="col-md-4 d-flex gap-8 flex-column">
                                <p class="table-sub-name text-ternary">Last Name</p>
                                <p class="table-name text-secondary">SUNDARAKATTI</p>
                            </div>
                            <div class="col-md-4 d-flex gap-8 flex-column">
                                <p class="table-sub-name text-ternary">Email ID</p>
                                <p mailto:class="table-name text-secondary">revathisyd@gmail.com</p>
                            </div>
                            <div class="col-md-4 d-flex gap-8 flex-column">
                                <p class="table-sub-name text-ternary">Mobile</p>
                                <p class="table-name text-secondary">0421443969</p>
                            </div>
                            <div class="col-md-4 d-flex gap-8 flex-column">
                                <p class="table-sub-name text-ternary">Address</p>
                                <p class="table-name text-secondary">Australia, NSW</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border border-radius-8  ">
                    <div class=" py-20 px-40 border-bottom table-headding-bg">
                        <p class="  body-2 fw-medium font-18 text-semibold ">Subscription Details </p>
                    </div>
                    <div class="bg-white px-40">
                        <div class=" d-flex justify-content-between align-items-center ">
                        </div>
                        <div class="row py-40 g-5  font-16 fw-medium ">
                            <div class="col-md-4 d-flex gap-8 flex-column">
                                <p class="table-sub-name text-ternary">Subscription Type</p>
                                <p class="table-name text-secondary">BETTERBETTORS BASIC</p>
                            </div>
                            <div class="col-md-4 d-flex gap-8 flex-column">
                                <p class="table-sub-name text-ternary">Expiry Date</p>
                                <p class="table-name text-secondary">31 DEC, 2024</p>
                            </div>
                            <div class="col-md-4 d-flex gap-8 flex-column">
                                <p class="table-sub-name text-ternary">Days Remaining</p>
                                <p class="table-name text-secondary">74</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="border border-radius-8  ">
                    <div class=" py-20 px-40 border-bottom table-headding-bg">
                        <p class="  body-2 fw-medium font-18 text-semibold">Subscription Details </p>
                    </div>
                    <div class="bg-white px-40 ">
                        <div class=" d-flex justify-content-between align-items-center ">
                        </div>
                        <div class="py-40 ">
                            <div style="overflow-x: auto;" >
                                <table class="table border">
                                    <thead class="bg-siderbar text-white border font-14 fw-medium">
                                        <tr>
                                            <th>S.No</th>
                                            <th>Transaction Date</th>
                                            <th>Transaction Time</th>
                                            <th>Expired Date</th>
                                            <th>Reference No</th>
                                        </tr>
                                    </thead>
                                    <tbody class="font-14 fw-medium text-secondary">
                                        <tr>
                                            <td>1</td>
                                            <td>31 DEC, 2024</td>
                                            <td>19:39:25</td>
                                            <td>31 DEC, 2024</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `,
        "Race Radar": `
        <section class="dashboard w-100 d-flex flex-column gap-32">
            <div class="border border-radius-8  ">
                <div class="bg-white px-40 py-40 d-flex flex-column gap-60">
                    <div class=" d-flex justify-content-center align-items-center ">
                        <img src="./asssest/image/race-radar-logo.png" alt=" race radar"
                             class="race-radar-img" />
                    </div>
                    <div class="d-flex gap-24 flex-column align-items-center">
                        <button class=".btn-2 btn text-white btn-width ">Download Chrome Extension</button>
                           <p class="fw-medium body-4">By downloading, you agree to the <a href="#" class="primary-text text-decoration-none">Application Terms.</a></p>
                    </div>
                </div>
            </div>
        </section>
        `,
        "User Configuration": `
           <section class="dashboard w-100 d-flex flex-column gap-32 border border-radius-8">
                <div class="border rounded">
                    <div class="py-3 px-4 border-bottom table-heading-bg">
                        <p class="body-2 fw-medium font-18 text-semibold">My Settings</p>
                    </div>
                    <div class="bg-white">
                        <form class="py-4 px-4 d-flex flex-column gap-24">
                            <div class="d-flex flex-row gap-24 flex-wrap">
                                <div class="d-flex flex-column flex-fill gap-8">
                                    <label for="bookieState" class="form-label mb-0">Preferred Bookie State</label>
                                    <input type="number" class="form-control" id="bookieState" value="0" min="0">
                                </div>
                                <div class="d-flex flex-column flex-fill gap-8">
                                    <label for="betType" class="form-label mb-0">Default Bet Type</label>
                                    <select class="form-select" id="betType">
                                        <option selected>Select option</option>
                                        <option value="1">Single</option>
                                        <option value="2">Multiple</option>
                                        <option value="3">System</option>
                                    </select>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap gap-24">
                                <div class="d-flex flex-column flex-fill gap-8">
                                    <label for="bankroll" class="form-label mb-0">Bankroll</label>
                                    <input type="number" class="form-control" id="bankroll" value="0" min="0">
                                </div>
                                <div class="d-flex flex-column flex-fill gap-8">
                                    <label for="bettingPreference" class="form-label mb-0">Betting Preference</label>
                                    <select class="form-select" id="bettingPreference">
                                        <option selected>Select option</option>
                                        <option value="1">Favorites</option>
                                        <option value="2">Underdogs</option>
                                        <option value="3">Value bets</option>
                                    </select>
                                </div>
                            </div>
                            <div class="d-flex">
                                <button type="submit" class="btn btn-primary px-4">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        `,
        // Add more page contents for other menu items as needed
    };

    // Function to update breadcrumb
    function updateBreadcrumb(pageName) {
        // Update desktop breadcrumb
        const desktopBreadcrumb = document.querySelector('.d-none.d-md-block');
        if (desktopBreadcrumb) {
            desktopBreadcrumb.textContent = getParentSection(pageName) + " / " + pageName;
        }

        // Update mobile breadcrumb
        const mobileBreadcrumb = document.querySelector('.breadcrum-sm');
        if (mobileBreadcrumb) {
            mobileBreadcrumb.textContent = getParentSection(pageName) + " / " + pageName;
        }
    }

    // Helper function to determine parent section
    function getParentSection(pageName) {
        // This is a simplified version, you might need to adjust based on your menu structure
        if (pageName === "Profile" || pageName === "My Bookies" || pageName === "User Configuration") {
            return "User Account";
        } else if (pageName === "Race Matrix" || pageName === "Racing Planner" || pageName === "My Race Picks" || pageName === "My Bet Logbook" || pageName === "Promo Mug Ratio") {
            return "Dashboard";
        } else if (pageName === "Other Bets") {
            return "Transactions";
        } else if (pageName === "P / L Analytics") {
            return "Reports";
        } else if (pageName === "My Notifications" || pageName === "My Bookie Promo" || pageName === "Race Radar") {
            return "Utilities";
        }
        return "";
    }

    // Add click event listeners to each menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all menu items
            menuItems.forEach(mi => mi.classList.remove('active'));

            // Add active class to clicked menu item
            this.classList.add('active');

            // Get the page name from the menu item text
            const pageName = this.textContent.trim();

            // Update the breadcrumb
            updateBreadcrumb(pageName);

            // Update the page content if we have content for this menu item
            if (pageContents[pageName]) {
                pageContentArea.innerHTML = pageContents[pageName];
            } else {
                // If we don't have specific content, show a placeholder
                pageContentArea.innerHTML = `
                    <section class="dashboard w-100 d-flex flex-column gap-32">
                        <div class="border border-radius-8">
                            <div class="py-20 px-40 border-bottom table-headding-bg">
                                <p class="body-2 fw-medium font-18 text-semibold">${pageName}</p>
                            </div>
                            <div class="bg-white px-40 py-40">
                                <p>Content for ${pageName} goes here.</p>
                            </div>
                        </div>
                    </section>
                `;
            }
        });
    });
});