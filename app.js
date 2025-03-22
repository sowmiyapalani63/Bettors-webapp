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
        <div class=" px-40 ">
            <div class="py-32">
                <div class=" d-flex flex-column gap-40">
                    <div class="d-flex flex-row gap-8 font-12">
                        <div
                            class="w-48 h-30 bg-white d-flex flex-column justify-content-center border border-radius-4">
                            <img src="./asssest/image/previousarrow.svg" alt="user"
                                class="image img-fluid h-20" id="prevBtn">
                        </div>
                        <div id="carousel-container"
                            class="d-flex flex-row gap-16 font-12 fw-medium carousal-container overflow-x-scroll matrix-conatiner">
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
                            class="w-48 bg-white d-flex flex-column justify-content-center border border-radius-4 h-30">
                            <img src="./asssest/image/nextarrow.svg" alt="user" class="image h-20   "
                                id="nextBtn">
                        </div>
                    </div>
                    <div class="d-flex flex-md-row flex-column justify-content-between gap-20">
                        <div class="d-flex flex-column gap-20">
                            <div
                                class="d-flex flex-md-row flex-column gap-8 align-items-baseline font-16 text-secondary">
                                <span class="fw-normal">Last Updated :</span>
                                <span class="fw-medium">21/10/2024 - 10:45:14 AM</span>
                            </div>
                            <div class="d-flex flex-md-row flex-column gap-8 align-items-baseline font-16 ">
                                <span class="fw-normal text-secondary">Race Date :</span>
                                <span
                                    class="d-flex flex-md-row flex-column gap-4 align-items-baseline fw-medium text-secondary">21/10/2024
                                    <sub class="font-12 text-race fw-medium ">Today</sub></span>
                            </div>
                            <p class="font-12 fw-medium text-secondary">Asia/Calcutta</p>

                        </div>
                        <div class="d-flex flex-md-row flex-column gap-16 align-items-md-center flex-wrap">
                            <input type="search" placeholder="Find your horse"
                                class="border-radius-4 text-secondary p-10 border-color  flex-grow-sm search-input-width"></input>
                            <button class="body-4 btn text-white flex-grow-sm px-32">Filters</button>
                        </div>


                    </div>
                    <div
                        class="py-20 d-flex flex-column flex-md-row flex-wrap justify-content-between gap-20 text-secondary">
                        <div class="d-flex gap-8 flex-row align-items-center fw-medium font-14">
                            <input type="checkbox" class="border-radius-4 text-secondary border-color " />
                            <label for="">Show my favourites only</label>
                        </div>

                        <div
                            class="d-flex gap-20 flex-column flex-md-row fw-medium font-14 align-items-md-center text-secondary">
                            <div class="d-flex gap-4 flex-row align-items-center horse-no">
                                <span class="rounded-circle bg-horse px-8 py-8 "> </span>
                                <span>Number Of Horses</span>
                            </div>
                            <div class="d-flex gap-4 flex-row align-items-center Promo-bookie">
                                <span class="rounded-circle bg-horse px-8 py-8 bg-mug"> </span>

                                <span>Number Of Promo Bookies</span>
                            </div>
                            <div class="d-flex gap-4 flex-row align-items-center best-mug">
                                <span class="rounded-circle  px-8 py-8 bg-promo"> </span>
                                <span>Best Mug</span>
                            </div>
                            <div class="d-flex gap-4 flex-row align-items-center open-race">
                                <span class="rounded-circle bg-race px-8 py-8 "> </span>
                                <span>Open Race</span>
                            </div>

                        </div>
                    </div>
                    <div class=" ">

                        <div class=" py-40">
                            <div class="d-flex flex-column gap-16">
                                <div class="d-flex flex-row  fw-medium font-16 ">
                                    <div
                                        class="d-flex flex-column bg-grey p-16 border-radius-left-corner  matrix-heading">
                                        <p class="font-16 fw-medium text-semibold ">GAWLER</p>

                                    </div>
                                    <div class="d-flex flex-row px-16 gap-16  overflow-x-scroll  matrix-conatiner">
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>


                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon" class="cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-race text-dark border-radius-2 text-white race-info-card">0</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-promo border-radius-2 text-white race-info-card">M</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    class="d-flex flex-row  fw-medium font-16">
                                    <div
                                        class="d-flex flex-column bg-grey p-16 border-radius-left-corner matrix-heading  ">
                                        <p class="font-16 fw-medium text-semibold ">FLEMINGTO</p>

                                    </div>
                                    <div class="d-flex flex-row px-16 gap-16 overflow-x-scroll  matrix-conatiner">
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                    <span
                                                        class="p-10 bg-race text-dark border-radius-2 text-white race-info-card">0</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    class="d-flex flex-row  fw-medium font-16  ">
                                    <div
                                        class="d-flex flex-column bg-grey p-16 border-radius-left-corner matrix-heading  ">
                                        <p class="font-16 fw-medium text-semibold">NORTHAM</p>

                                    </div>
                                    <div class="d-flex flex-row px-16 gap-16 overflow-x-scroll  matrix-conatiner">
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-promo text-dark border-radius-2 text-white race-info-card">M</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                    <span
                                                        class="p-10 bg-promo border-radius-2 text-white race-info-card">M</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                <div
                                    class="d-flex flex-row  fw-medium font-16 overflow-x-scroll ">
                                    <div
                                        class="d-flex flex-column bg-grey p-16 border-radius-left-corner matrix-heading">
                                        <p class="font-16 fw-medium text-semibold">IPSWICH</p>

                                    </div>
                                    <div class="d-flex flex-row px-16 gap-16  overflow-x-scroll  matrix-conatiner">
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-promo border-radius-2 text-white race-info-card">M</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug text-dark border-radius-2 text-white race-info-card">1</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>

                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    class="d-flex flex-row  fw-medium font-16 ">
                                    <div
                                        class="d-flex flex-column bg-grey p-16 border-radius-left-corner  matrix-heading">
                                        <p class="font-16 fw-medium text-semibold ">HAWKESBURY</p>

                                    </div>
                                    <div class="d-flex flex-row px-16 gap-16 overflow-x-scroll matrix-conatiner">
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-race text-dark border-radius-2 text-white race-info-card">0</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card race-info-card ">12</span>
                                                    <span
                                                        class="p-10 bg-promo border-radius-2 text-white race-info-card race-info-card">M</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex flex-column border-radius-8 bg-white p-16 gap-16 matrix-wrapper">
                                            <div class="d-flex flex-row justify-content-between flex-wrap">
                                                <div class="d-flex flex-column gap-8">
                                                    <p class="d-flex flex-row gap-8 fw-medium font-14">
                                                        <span class="primary-text">R2</span>
                                                        <span class="text-secondary">(07 : 45)</span>

                                                    </p>
                                                    <p class="text-secondary">1300m</p>
                                                </div>
                                                <div>
                                                    <img src="./asssest/image/likeicon.svg" alt="heart"
                                                        class="heartIcon cursor-pointer" />
                                                </div>
                                            </div>
                                            <div class="font-12 fw-medium">
                                                <p class=" ">
                                                    <span class="text-run  bg-run border-4  px-4  py-8">Run
                                                        2nd</span>
                                                </p>
                                            </div>
                                            <div class="d-flex flex-column gap-10 fw-medium">
                                                <div class="d-flex flex-row gap-8 font-16">
                                                    <span
                                                        class="p-10 bg-horse border-radius-2 text-semibold race-info-card">12</span>
                                                    <span
                                                        class="p-10 bg-mug border-radius-2 text-white race-info-card">1</span>
                                                </div>
                                                <div class="primary-text text-center font-12">
                                                    View Bookies
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
        "Racing Planner":`
 <section class="dashboard w-100 d-flex flex-column gap-40">
                    <div class="d-flex flex-row gap-8 font-12">
                                    <div
                                        class="w-48 h-30 bg-white d-flex flex-column justify-content-center border border-radius-4">
                                        <img src="./asssest/image/previousarrow.svg" alt="user"
                                            class="image img-fluid h-20" id="prevBtn">
                                    </div>
                                    <div id="carousel-container"
                                        class="d-flex flex-row gap-16 font-12 fw-medium carousal-container overflow-x-scroll matrix-conatiner">
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
                                        class="w-48 bg-white d-flex flex-column justify-content-center border border-radius-4 h-30">
                                        <img src="./asssest/image/nextarrow.svg" alt="user" class="image h-20   "
                                            id="nextBtn">
                                    </div>
                                </div>
                    <div class="d-flex justify-content-between flex-column flex-md-row gap-20">
                        <div class="d-flex gap-20 flex-column">
                            <div class="d-flex gap-8">
                                <span class="body-4"> Race Date :</span>
                                <p class="body-4">21/10/2024 <sub
                                        class="font-12 text-race fw-medium ">Today</sub></span></p>
                            </div>
                            <div>
                                <p class="font-12  fw-normal">Asia/Calcutta</p>
                            </div>
                        </div>
                        <div class="d-flex flex-md-row flex-column gap-16 align-items-md-center flex-wrap">
                            <input type="search" placeholder="Find your horse"
                                class="border-radius-4 text-secondary p-10 border-color  flex-grow-sm search-input-width"></input>
                            <button class="body-4 btn text-white flex-grow-sm px-32">Filters</button>

                        </div>
                    </div>
                    <div class="d-flex flex-column gap-16">
                        <div class="d-flex gap-16 justify-content-start justify-content-md-end flex-wrap">
                            <div class="d-flex align-items-center gap-8">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="check-box">
                                <label for="vehicle1 fw-normal font-14"> Show My Favourites Only</label>
                            </div>
                            <div class="d-flex align-items-center gap-8">
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" class="check-box">
                                <label for="vehicle2 fw-normal font-14">Show Completed Races</label>
                            </div>
                        </div>

                        <div class="border border-radius-8 bg-white ">
                            <div class=" d-flex flex-column gap-16 px-40">
                                <div class="accordion" id="accordionExample">
                                    <!-- Accordion Item -->
                                    <div class="accordion-item d-flex flex-column gap-32">
                                        <!-- Accordion Header -->
                                        <h2 class="accordion-header bg-white " id="headingOne">
                                            <button class="accordion-button d-flex justify-content-between"
                                                type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                <div
                                                    class="d-flex justify-content-between w-100 align-items-center pe-3">
                                                    <div class="d-flex gap-24 flex-wrap ">
                                                        <p class="font-18 span-text-color fw-medium">Riccarton <span
                                                                class="body-4 text-dark fw-normal">1400</span></p>
                                                        <p class="font-18 span-text-color fw-medium">R1 <span
                                                                class="body-4 text-dark fw-normal">04 : 42</span></p>
                                                    </div>
                                                    <div class="p">

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                                            <path
                                                                d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                            </button>
                                        </h2>

                                        <!-- Accordion Body -->
                                        <div id="collapseOne" class="accordion-collapse collapse pb-32"
                                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body d-flex flex-column gap-8 py-32">
                                                <!-- Content you provided -->
                                                <div
                                                    class="d-flex align-items-center gap-8  justify-content-start justify-content-md-end">
                                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"
                                                        class="check-box">
                                                    <label for="vehicle1" class="fw-normal font-14">Add race to
                                                        favourites
                                                        Only</label>
                                                </div>
                                                <div class="border-radius-8 border d-flex flex-column gap-20 flex-wrap">
                                                    <div>
                                                        <div
                                                            class="py-32 px-24 border-bottom table-headding-bg d-flex justify-content-between flex-wrap">
                                                            <p class="body-2 fw-medium font-18">1. Drake’s Drum </p>
                                                            <div class="d-flex gap-24 flex-wrap">
                                                                <div class="d-flex flex-column gap-8 ">
                                                                    <p class="body-4 text-dark">Win Fixed</p>
                                                                    <p
                                                                        class="bg-white p-16 border-radius-8 width-height">
                                                                        50</p>
                                                                </div>
                                                                <div class="d-flex flex-column gap-8">
                                                                    <p class="body-4 text-dark">Win Fixed</p>
                                                                    <p
                                                                        class="bg-white p-16 border-radius-8 width-height">
                                                                        50</p>
                                                                </div>
                                                                <div class="d-flex flex-column gap-8">
                                                                    <p class="body-4 text-dark">Using Bet Bonus</p>
                                                                    <label class="switch">
                                                                        <input type="checkbox">
                                                                        <span class="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="py-20 px-24 d-flex flex-column gap-20">
                                                            <div class="d-flex flex-column gap-32 ">
                                                                <div
                                                                    class="d-flex form-grid justify-content-between direction w-100 ">
                                                                    <div class="w-100 w-md-50 d-flex flex-column gap-8">
                                                                        <label
                                                                            class="text-semibold body-4 flex-nowrap">Already
                                                                            have
                                                                            Account?</label>
                                                                        <select class="form-select w-100">
                                                                            <option selected>Select option</option>
                                                                            <option>Yes</option>
                                                                            <option>No</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="w-100 w-md-50 d-flex flex-column gap-8">
                                                                        <label class="text-semibold body-4">Select
                                                                            Bookies</label>
                                                                        <select class="form-select w-100">
                                                                            <option selected>Select option</option>
                                                                            <option>Bookie 1</option>
                                                                            <option>Bookie 2</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="d-flex justify-content-between gap-32 border-b pb-40 flex-wrap">
                                                                    <div class="d-flex flex-column gap-8">
                                                                        <label class="text-semibold body-4">Bookie
                                                                            Odds</label>
                                                                        <input type="number" class="form-control me-2"
                                                                            value="2">
                                                                    </div>
                                                                    <div class="d-flex flex-column gap-8">
                                                                        <label class="text-semibold body-4">Bookie
                                                                            Stake</label>
                                                                        <input type="number" class="form-control me-2"
                                                                            value="2">
                                                                    </div>
                                                                    <div class="d-flex flex-column gap-8">
                                                                        <label class="text-semibold body-4">Returns
                                                                            (Incl.Stake)</label>
                                                                        <input type="number" class="form-control me-2"
                                                                            value="2">
                                                                    </div>
                                                                    <div class="d-flex flex-column gap-8">
                                                                        <label class="text-semibold body-4">Bookie
                                                                            Profit ($)</label>
                                                                        <input type="number" class="form-control me-2"
                                                                            value="2">
                                                                    </div>
                                                                    <div class="d-flex flex-column gap-8">
                                                                        <p class="body-4 text-dark text-nowrap">Bookie
                                                                            Bet Placed</p>
                                                                        <label class="switch">
                                                                            <input type="checkbox">
                                                                            <span class="slider round"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p
                                                                    class="text-center font-12 span-text-color fw-normal">
                                                                    Please note: All odds and payouts displayed here are
                                                                    approximates.</p>
                                                                <p
                                                                    class="text-center font-12 span-text-color fw-normal">
                                                                    Please check your bookie website for exact odds and
                                                                    payouts. As always, practice responsible gambling.
                                                                </p>
                                                            </div>
                                                            <div class="d-flex justify-content-end">
                                                                <div class="d-flex gap-8 align-items-center">
                                                                    <p class="body-4 text-nowrap fw-medium">Ran Position
                                                                    </p>
                                                                    <input type="number" class="form-control me-2"
                                                                        value="">
                                                                </div>
                                                            </div>
                                                        </div>
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
        "My Race Picks":`
         <section class="dashboard w-100 d-flex flex-column gap-40">
                    <div class="d-flex flex-row gap-8 font-12">
                                    <div
                                        class="w-48 h-30 bg-white d-flex flex-column justify-content-center border border-radius-4">
                                        <img src="./asssest/image/previousarrow.svg" alt="user"
                                            class="image img-fluid h-20" id="prevBtn">
                                    </div>
                                    <div id="carousel-container"
                                        class="d-flex flex-row gap-16 font-12 fw-medium carousal-container overflow-x-scroll matrix-conatiner">
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
                                        class="w-48 bg-white d-flex flex-column justify-content-center border border-radius-4 h-30">
                                        <img src="./asssest/image/nextarrow.svg" alt="user" class="image h-20   "
                                            id="nextBtn">
                                    </div>
                                </div>
                    <div class="d-flex justify-content-between flex-column flex-md-row gap-20">
                        <div class="d-flex gap-20 flex-column">
                            <div class="d-flex gap-8">
                                <span class="body-4"> Race Date :</span>
                                <p class="body-4">21/10/2024 <sub
                                        class="font-12 text-race fw-medium ">Today</sub></span></p>
                            </div>
                            <div>
                                <p class="font-12  fw-normal">Asia/Calcutta</p>
                            </div>
                        </div>
                        <div class="d-flex flex-md-row flex-column gap-16 align-items-md-center flex-wrap">
                            <input type="search" placeholder="Find your horse"
                                class="border-radius-4 text-secondary p-10 border-color  flex-grow-sm search-input-width"></input>
                            <button class="body-4 btn text-white flex-grow-sm px-32">Filters</button>

                        </div>
                    </div>
                    <div class="d-flex flex-column gap-16">
                        <div class="d-flex gap-16 justify-content-start justify-content-md-end flex-wrap">
                            <div class="d-flex align-items-center gap-8">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="check-box">
                                <label for="vehicle1 fw-normal font-14"> Show My Favourites Only</label>
                            </div>
                            <div class="d-flex align-items-center gap-8">
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" class="check-box">
                                <label for="vehicle2 fw-normal font-14">Show Completed Races</label>
                            </div>
                        </div>

                        <div class="border border-radius-8 bg-white ">
                            <div class=" d-flex flex-column gap-16 px-40">
                                <div class="accordion" id="accordionExample">
                                    <!-- Accordion Item -->
                                    <div class="accordion-item d-flex flex-column gap-32">
                                        <!-- Accordion Header -->
                                        <h2 class="accordion-header bg-white " id="headingOne">
                                            <button class="accordion-button d-flex justify-content-between"
                                                type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                <div
                                                    class="d-flex justify-content-between w-100 align-items-center pe-3">
                                                    <div class="d-flex gap-24 flex-wrap ">
                                                        <p class="font-18 span-text-color fw-medium">Riccarton <span
                                                                class="body-4 text-dark fw-normal">1400</span></p>
                                                        <p class="font-18 span-text-color fw-medium">R1 <span
                                                                class="body-4 text-dark fw-normal">04 : 42</span></p>
                                                    </div>
                                                    <div class="p">

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                                            <path
                                                                d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                            </button>
                                        </h2>

                                        <!-- Accordion Body -->
                                        <div id="collapseOne" class="accordion-collapse collapse pb-32"
                                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body d-flex flex-column gap-8 py-32">
                                                <!-- Content you provided -->
                                                <div
                                                    class="d-flex align-items-center gap-8  justify-content-start justify-content-md-end">
                                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"
                                                        class="check-box">
                                                    <label for="vehicle1" class="fw-normal font-14">Add race to
                                                        favourites
                                                        Only</label>
                                                </div>
                                                <div class="border-radius-8 border d-flex flex-column gap-20 flex-wrap">
                                                    <div>
                                                        <div
                                                            class="py-32 px-24 border-bottom table-headding-bg d-flex justify-content-between flex-wrap">
                                                            <p class="body-2 fw-medium font-18">1. Drake’s Drum </p>
                                                            <div class="d-flex gap-24 flex-wrap">
                                                                <div class="d-flex flex-column gap-8 ">
                                                                    <p class="body-4 text-dark">Win Fixed</p>
                                                                    <p
                                                                        class="bg-white p-16 border-radius-8 width-height">
                                                                        50</p>
                                                                </div>
                                                                <div class="d-flex flex-column gap-8">
                                                                    <p class="body-4 text-dark">Win Fixed</p>
                                                                    <p
                                                                        class="bg-white p-16 border-radius-8 width-height">
                                                                        50</p>
                                                                </div>
                                                                <div class="d-flex flex-column gap-8">
                                                                    <p class="body-4 text-dark">Using Bet Bonus</p>
                                                                    <label class="switch">
                                                                        <input type="checkbox">
                                                                        <span class="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="py-20 px-24 d-flex flex-column gap-20">
                                                            <div class="d-flex flex-column gap-32 ">
                                                                <div
                                                                    class="d-flex form-grid justify-content-between direction w-100 ">
                                                                    <div class="w-100 w-md-50 d-flex flex-column gap-8">
                                                                        <label
                                                                            class="text-semibold body-4 flex-nowrap">Already
                                                                            have
                                                                            Account?</label>
                                                                        <select class="form-select w-100">
                                                                            <option selected>Select option</option>
                                                                            <option>Yes</option>
                                                                            <option>No</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="w-100 w-md-50 d-flex flex-column gap-8">
                                                                        <label class="text-semibold body-4">Select
                                                                            Bookies</label>
                                                                        <select class="form-select w-100">
                                                                            <option selected>Select option</option>
                                                                            <option>Bookie 1</option>
                                                                            <option>Bookie 2</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="d-flex justify-content-between gap-32 border-b pb-40 flex-wrap">
                                                                    <div class="d-flex flex-column gap-8">
                                                                        <label class="text-semibold body-4">Bookie
                                                                            Odds</label>
                                                                        <input type="number" class="form-control me-2"
                                                                            value="2">
                                                                    </div>
                                                                    <div class="d-flex flex-column gap-8">
                                                                        <label class="text-semibold body-4">Bookie
                                                                            Stake</label>
                                                                        <input type="number" class="form-control me-2"
                                                                            value="2">
                                                                    </div>
                                                                    <div class="d-flex flex-column gap-8">
                                                                        <label class="text-semibold body-4">Returns
                                                                            (Incl.Stake)</label>
                                                                        <input type="number" class="form-control me-2"
                                                                            value="2">
                                                                    </div>
                                                                    <div class="d-flex flex-column gap-8">
                                                                        <label class="text-semibold body-4">Bookie
                                                                            Profit ($)</label>
                                                                        <input type="number" class="form-control me-2"
                                                                            value="2">
                                                                    </div>
                                                                    <div class="d-flex flex-column gap-8">
                                                                        <p class="body-4 text-dark text-nowrap">Bookie
                                                                            Bet Placed</p>
                                                                        <label class="switch">
                                                                            <input type="checkbox">
                                                                            <span class="slider round"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p
                                                                    class="text-center font-12 span-text-color fw-normal">
                                                                    Please note: All odds and payouts displayed here are
                                                                    approximates.</p>
                                                                <p
                                                                    class="text-center font-12 span-text-color fw-normal">
                                                                    Please check your bookie website for exact odds and
                                                                    payouts. As always, practice responsible gambling.
                                                                </p>
                                                            </div>
                                                            <div class="d-flex justify-content-end">
                                                                <div class="d-flex gap-8 align-items-center">
                                                                    <p class="body-4 text-nowrap fw-medium">Ran Position
                                                                    </p>
                                                                    <input type="number" class="form-control me-2"
                                                                        value="">
                                                                </div>
                                                            </div>
                                                        </div>
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
        "Promo Mug Ratio": `
      <section class="dashboard w-100 d-flex flex-column gap-32">
                    <div class="  ">
                        <div class="py-32">
                            <div class=" d-flex flex-column gap-40">
                                <div class="d-flex flex-row gap-8 font-12">
                                    <div
                                        class="w-48 h-30 bg-white d-flex flex-column justify-content-center border border-radius-4">
                                        <img src="./asssest/image/previousarrow.svg" alt="user"
                                            class="image img-fluid h-20" id="prevBtn">
                                    </div>
                                    <div id="carousel-container"
                                        class="d-flex flex-row gap-16 font-12 fw-medium carousal-container overflow-x-scroll matrix-conatiner">
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
                                        class="w-48 bg-white d-flex flex-column justify-content-center border border-radius-4 h-30">
                                        <img src="./asssest/image/nextarrow.svg" alt="user" class="image h-20   "
                                            id="nextBtn">
                                    </div>
                                </div>
                                <div
                                    class="py-20 d-flex flex-column flex-md-row flex-wrap justify-content-between gap-20">
                                    <div class="d-flex gap-8 flex-row align-items-center">
                                        <input type="checkbox" class="border-radius-4 text-secondary border-color " />
                                        <label for="">I want
                                            to track promo to mug ratio today on my own</label>
                                    </div>

                                    <div class="d-flex gap-20 flex-column flex-md-row fw-medium font-14">
                                        <button class="body-4 btn text-white ">Save</button>
                                        <button
                                            class="body-4 btn bg-white border-radius-4 border-color-primary ">Add</button>
                                    </div>
                                </div>
                                <div class="border border-radius-8 ">
                                    <div
                                        class=" py-20 px-40 border-bottom table-headding-bg d-flex flex-md-row flex-column justify-content-between gap-40">
                                        <div class="d-flex flex-md-row flex-column align-items-md-center gap-16">
                                            <p class="body-2 fw-medium font-18 text-semibold">BetLocal </p>

                                            <div class="border border-radius-4 bg-opacity px-4 py-8"><span>Promo 2 : Mug
                                                    1</span></div>
                                        </div>

                                        <div class="d-flex flex-row gap-40 text-secondary body-2 fw-medium font-18">
                                            <p class=" ">No promo bet placed</p>

                                        </div>
                                    </div>
                                    <div class="bg-white px-40">
                                        <div class="py-32">
                                            <div
                                                class="d-flex flex-row  fw-medium font-16 radio-wrapper overflow-x-scroll">
                                                <div class="d-flex flex-column justify-content-between py-48  border-r w-100px">
                                                    <p>promo</p>
                                                    <p>Mug </p>
                                                </div>
                                                <div class="d-flex flex-column justify-content-between  px-40 gap-56">
                                                    <div class="d-flex flex-row  gap-16">

                                                        <div class="redio-container d-flex flex-column gap-16 ">
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>

                                                            <input type="radio" name="bet1">



                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex flex-row gap-16">
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border border-radius-8 ">
                                    <div
                                        class=" py-20 px-40 border-bottom table-headding-bg d-flex flex-md-row flex-column justify-content-between gap-40">
                                        <div class="d-flex flex-md-row flex-column align-items-md-center gap-16">
                                            <p class="body-2 fw-medium font-18 text-semibold">BetLocal </p>

                                            <div class="border border-radius-4 bg-opacity px-4 py-8"><span>Promo 2 : Mug
                                                    1</span></div>
                                        </div>

                                        <div class="d-flex flex-row gap-40 text-secondary body-2 fw-medium font-18">
                                            <p class=" ">No promo bet placed</p>

                                        </div>
                                    </div>
                                    <div class="bg-white px-40">
                                        <div class="py-32">
                                            <div
                                                class="d-flex flex-row  border-l fw-medium font-16 radio-wrapper overflow-x-scroll">
                                                <div class="d-flex flex-column justify-content-between py-48 border-r w-100px">
                                                    <p>promo</p>
                                                    <p>Mug </p>
                                                </div>
                                                <div class="d-flex flex-column justify-content-between  px-40 gap-56">
                                                    <div class="d-flex flex-row  gap-16">

                                                        <div class="redio-container d-flex flex-column gap-16 ">
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>

                                                            <input type="radio" name="bet1">



                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex flex-row gap-16">
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border border-radius-8 ">
                                    <div
                                        class=" py-20 px-40 border-bottom table-headding-bg d-flex flex-md-row flex-column justify-content-between gap-40">
                                        <div class="d-flex flex-md-row flex-column align-items-md-center gap-16">
                                            <p class="body-2 fw-medium font-18 text-semibold">BetLocal </p>

                                            <div class="border border-radius-4 bg-opacity px-4 py-8"><span>Promo 2 : Mug
                                                    1</span></div>
                                        </div>

                                        <div class="d-flex flex-row gap-40 text-secondary body-2 fw-medium font-18">
                                            <p class=" ">No promo bet placed</p>

                                        </div>
                                    </div>
                                    <div class="bg-white px-40">
                                        <div class="py-32">
                                            <div
                                                class="d-flex flex-row  border-l fw-medium font-16 radio-wrapper overflow-x-scroll">
                                                <div class="d-flex flex-column justify-content-between py-48 border-r w-100px">
                                                    <p>promo</p>
                                                    <p>Mug </p>
                                                </div>
                                                <div class="d-flex flex-column justify-content-between  px-40 gap-56">
                                                    <div class="d-flex flex-row  gap-16">

                                                        <div class="redio-container d-flex flex-column gap-16 ">
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>

                                                            <input type="radio" name="bet1">



                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex flex-row gap-16">
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="redio-container d-flex flex-column-reverse gap-16 ">
                                                            <label class="radio-btn">
                                                                <input type="radio" name="bet1">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <div class="rotate-45 ">
                                                                <p class="primary-text">
                                                                    R2
                                                                </p>
                                                                <p class="font-12 fw-normal text-secondary">
                                                                    Flemington
                                                                </p>
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
        "P / L Analytics":`
       
                <div class="d-flex flex-column gap-40">
                    <div class=" d-flex flex-column gap-10">
                        <div>
                            <select class="border-radius-4 text-secondary p-12 border-color filter-input flex-grow-sm">
                                <option value="">Select option</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div class="d-flex flex-row gap-8 font-12">
                            <div
                                class="w-48 h-30  bg-white d-flex flex-column justify-content-center border border-radius-4">
                                <img src="./asssest/image/previousarrow.svg" alt="user" class="image img-fluid h-20"
                                    id="prevBtn">
                            </div>
                            <div id="carousel-container"
                                class="d-flex flex-row gap-16 font-12 fw-medium carousal-container overflow-x-scroll matrix-conatiner">

                                <!-- Your cards go here -->
                                <div class="d-flex flex-column gap-16">

                                    <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                        <div>
                                            21-Oct-2024
                                        </div>
                                        <div>
                                            Monday
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column gap-16">
                                    <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                        <div>
                                            21-Oct-2024
                                        </div>
                                        <div>
                                            Monday
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column gap-16">
                                    <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                        <div>
                                            21-Oct-2024
                                        </div>
                                        <div>
                                            Monday
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column gap-16">
                                    <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                        <div>
                                            21-Oct-2024
                                        </div>
                                        <div>
                                            Monday
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column gap-16">
                                    <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                        <div>
                                            21-Oct-2024
                                        </div>
                                        <div>
                                            Monday
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column gap-16">
                                    <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                        <div>
                                            21-Oct-2024
                                        </div>
                                        <div>
                                            Monday
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column gap-16">
                                    <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                        <div>
                                            21-Oct-2024
                                        </div>
                                        <div>
                                            Monday
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column gap-16">
                                    <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
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
                                <img src="./asssest/image/nextarrow.svg" alt="user" class="image h-20   " id="nextBtn">
                            </div>
                        </div>
                    </div>
                    <section class="dashboard w-100 d-flex flex-column gap-8">
                        <div class="border border-radius-8  ">
                            <div class="bg-white px-40 ">
                                <div class="py-32">
                                    <div class=" d-flex flex-column gap-40">
                                        <div class="d-flex flex-column gap-16">
                                            <div class="py-32">
                                                <div class="d-flex flex-column gap-16">

                                                    <div
                                                        class="body-2 fw-medium font-14 fw-medium d-flex flex-lg-row flex-column justify-content-between gap-20 flex-wrap ">
                                                        <p class="  body-2 fw-medium font-18 text-semibold">Planned </p>
                                                    </div>
                                                    <div class="card-container gap-22">
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Planned Bets</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Planned Stake</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Deposit</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Withdrawal</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Refunded Bets</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Refunded Stake</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Bets
                                                            </div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                In-progress Bets</div>
                                                            <div class="value p-16 text-start text-start">0</div>
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
                                                        <p class="  body-2 fw-medium font-18 text-semibold">Bets </p>
                                                    </div>
                                                    <div class="card-container gap-22">
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Played Stakes</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                In-progress Stakes</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Average Stake</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Average Odds</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Winning Bets</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Losing Bets</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Profit / Loss
                                                            </div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Biggest Profit</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                No.of Bonuses Triggered</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Total Bonus Credited</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                In-progress Bets</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Biggest Odds Won</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                ROI</div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>
                                                        <div
                                                            class="card d-flex flex-column border-radius-8  border-color fw-medium font-14">
                                                            <div class="title bg-siderbar text-white p-16 text-center">
                                                                Success Rate
                                                            </div>
                                                            <div class="value p-16 text-start text-start">0</div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                    </section>
                </div>

          
        `,
        "Other Bets":`
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
                                            class="w-48 h-30 bg-white d-flex flex-column justify-content-center border border-radius-4">
                                            <img src="./asssest/image/previousarrow.svg" alt="user"
                                                class="image img-fluid h-20" id="prevBtn">
                                        </div>
                                        <div id="carousel-container"
                                            class="d-flex flex-row gap-16 font-12 fw-medium carousal-container overflow-x-scroll matrix-conatiner">
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
                                            class="w-48 bg-white d-flex flex-column justify-content-center border border-radius-4 h-30">
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
                                                                            <span>Date</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bookie</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Bet Type</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Sport</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Event</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Selection</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>BackStack</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>BackOdss</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>LayStake</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>LayOdss</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>Result</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>PL Bet</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>PL Daily</span><span><img
                                                                                    src="./asssest/image/filterarrow.svg"
                                                                                    alt="filter" /></span>
                                                                        </div>
                                                                    </th>
                                                                    <th>
                                                                        <div
                                                                            class="justify-content-between d-flex flex-row flex-no-wrap">
                                                                            <span>PL Total</span><span><img
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
                                                                <tr class="text-center text-semibold">
                                                                    <td>1</td>
                                                                    <td><input type="date" value=""
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium"></input>
                                                                    </td>

                                                                    <td>
                                                                        <select
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium">
                                                                            <option value="">Select option</option>
                                                                            <option value="option1">Option 1</option>
                                                                            <option value="option2">Option 2</option>
                                                                            <option value="option3">Option 3</option>
                                                                        </select>
                                                                    </td>
                                                                    </td>
                                                                    <td>
                                                                        <select
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium">
                                                                            <option value="">Select option</option>
                                                                            <option value="option1">Option 1</option>
                                                                            <option value="option2">Option 2</option>
                                                                            <option value="option3">Option 3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <select
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium">
                                                                            <option value="">Select option</option>
                                                                            <option value="option1">Option 1</option>
                                                                            <option value="option2">Option 2</option>
                                                                            <option value="option3">Option 3</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" value=""
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium"></input>
                                                                    </td>

                                                                    <td><input type="text" value=""
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium"></input>
                                                                    </td>
                                                                    <td><input type="number" value="0"
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium">
                                                                    </td>
                                                                    <td><input type="number" value="0"
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium">
                                                                    </td>
                                                                    <td><input type="number" value="0"
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium">
                                                                    </td>
                                                                    <td><input type="number" value="0"
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium">
                                                                    </td>
                                                                    <td><input type="number" value="0"
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium">
                                                                    </td>

                                                                    <td><select
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium">
                                                                            <option value="">Select option</option>
                                                                            <option value="option1">Option 1</option>
                                                                            <option value="option2">Option 2</option>
                                                                            <option value="option3">Option 3</option>
                                                                        </select></td>
                                                                    <td><input type="number" value="0"
                                                                            class="border-radius-4 py-8 px-16 border-color fw-medium ">
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" value=""
                                                                        class="border-radius-4 py-8 px-16 border-color fw-medium"></input>
                                                                    </td>
                                                                
                                                                    <td class=""><img src="./asssest/image/deleteicon.svg" alt=""/></td>
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
        "My Bet Logbook":`
          <section class="dashboard w-100 d-flex flex-column gap-40">

                    <div class="d-flex flex-row gap-8 font-12">
                        <div
                            class="w-48 h-30  bg-white d-flex flex-column justify-content-center border border-radius-4">
                            <img src="./asssest/image/previousarrow.svg" alt="user" class="image img-fluid h-20"
                                id="prevBtn">
                        </div>
                        <div id="carousel-container"
                            class="d-flex flex-row gap-16 font-12 fw-medium carousal-container overflow-x-scroll matrix-conatiner">
                            <!-- Your cards go here -->
                            <div class="d-flex flex-column gap-16">
                                <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                    <div>
                                        21-Oct-2024
                                    </div>
                                    <div>
                                        Monday
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column gap-16">
                                <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                    <div>
                                        21-Oct-2024
                                    </div>
                                    <div>
                                        Monday
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column gap-16">
                                <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                    <div>
                                        21-Oct-2024
                                    </div>
                                    <div>
                                        Monday
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column gap-16">
                                <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                    <div>
                                        21-Oct-2024
                                    </div>
                                    <div>
                                        Monday
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column gap-16">
                                <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                    <div>
                                        21-Oct-2024
                                    </div>
                                    <div>
                                        Monday
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column gap-16">
                                <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                    <div>
                                        21-Oct-2024
                                    </div>
                                    <div>
                                        Monday
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column gap-16">
                                <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                    <div>
                                        21-Oct-2024
                                    </div>
                                    <div>
                                        Monday
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column gap-16">
                                <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
                                    <div>
                                        21-Oct-2024
                                    </div>
                                    <div>
                                        Monday
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column gap-16">
                                <div class="d-flex flex-column p-16 gap-16 border border-radius-4 card-carousel-bg">
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
                            <img src="./asssest/image/nextarrow.svg" alt="user" class="image h-20   " id="nextBtn">
                        </div>
                    </div>
                    <div class="border border-radius-8  ">
                        <div
                            class=" py-20 px-40 border-bottom table-headding-bg d-flex flex-md-row flex-column justify-content-between ">
                            <p class="  body-2 fw-medium font-18 text-semibold">My Bet Summary </p>

                        </div>

                        <div class="bg-white px-40 ">
                            <div class="py-32">
                                <div class=" d-flex flex-column gap-40">


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
                                                                        class="text-center body-2 fw-medium font-14 text-semibold  ">
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
                                                                        class="text-center body-2 fw-medium font-14 text-semibold  ">
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
                                                                        class="text-center body-2 fw-medium font-14 text-semibold  ">
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
                </section>
                `
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
                        <div class=" py-20 px-40 border-bottom table-headding-bg ">
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
       
        "Profile": `
             <section class="dashboard w-100 d-flex flex-column gap-32">
                    <div class="border border-radius-8  ">
                        <div class=" py-20 px-40 border-bottom table-headding-bg">
                            <p class="  body-2 fw-medium font-18 text-semibold">My Profile</p>
                        </div>
                        <div class="bg-white px-40">
                            <div
                                class=" py-20  d-flex  justify-content-between align-items-center border-bottom flex-wrap gap-3">
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
                                    <button class="body-4 btn text-white" data-bs-toggle="modal"
                                        data-bs-target="#changePasswordModal">Update Password</button>
                                    <button class="body-4 btn text-white" data-bs-toggle="modal"
                                        data-bs-target="#EditProfileModal">Edit Profile</button>
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

                                <div class="overflow-x-auto border-radius-8">
                                    <div style="overflow-x: auto;">
                                        <table class="table border logbook-table">
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
                        <div class=" py-20 px-40 border-bottom table-headding-bg ">
                            <p class="body-2 fw-medium font-18 text-semibold">My Settings</p>
                        </div>
                        <div class="bg-white px-40">
                            <form class="py-40 d-flex flex-column gap-24">
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
                                    <button type="submit" class="btn text-white font-14 fw-medium  border-radius-4">Save</button>
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