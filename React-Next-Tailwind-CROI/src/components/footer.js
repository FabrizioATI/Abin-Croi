import React from "react";

const Footer = () => {
    return (
        <footer class="text-center lg:text-left bg-gray-100 text-gray-600">

            <div class="mx-6 py-10 text-center md:text-left">
                <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="">
                        <h6 class="
                            uppercase
                            font-semibold
                            mb-4
                            flex
                            items-center
                            justify-center
                            md:justify-start
                            ">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
                                class="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
                                </path>
                            </svg>
                            Logo
                        </h6>
                    </div>
                    <div class="">
                        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Lorem Ipsum
                        </h6>
                        <p class="mb-4">
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms 
                        of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.

                        </p>
                        <br />
                        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Lorem Ipsum
                        </h6>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Pricing</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Settings</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Orders</a>
                        </p>
                        <p>
                            <a href="#!" class="text-gray-600">Help</a>
                        </p>
                    </div>
                    <div class="">
                        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Contactanos
                        </h6>
                        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                            <form>
                                <div class="form-group mb-6">
                                    <input type="text" class="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                        placeholder="Name" />
                                </div>
                                <div class="form-group mb-6">
                                    <input type="email" class="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                        placeholder="Email address" />
                                </div>
                                <div class="form-group mb-6">
                                    <textarea
                                        class="
                                        form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                                        id="exampleFormControlTextarea13"
                                        rows="3"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <button type="submit" class="
                                    w-full
                                    px-6
                                    py-2.5
                                    bg-blue-600
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-blue-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
