/* eslint-disable qwik/jsx-img */
import { component$  } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

  return (
    <>
      <div class="main w-full h-screen flex">
        
        <div class="side-bar w-full max-w-[380px] h-full border-r border-white/10 bg-[#262626] overflow-hidden">
          <div class="side-bar-header flex justify-between h-10 items-center"> 
            <li class="my-workspace-icon text-white w-full h-10 flex justify-start items-center px-4 gap-x-2 border-b border-white/10 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1ZM6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4Z" fill="#ffffff">
                </path>
                <path d="M3 13.7308C3 12.2499 3.53343 11.2189 4.38261 10.5456C5.24878 9.85889 6.50061 9.5 8 9.5C9.49939 9.5 10.7512 9.85889 11.6174 10.5456C12.4666 11.2189 13 12.2499 13 13.7308V15H14V13.7308C14 11.9809 13.3541 10.6465 12.2387 9.76205C11.1402 8.89111 9.64203 8.5 8 8.5C6.35797 8.5 4.85981 8.89111 3.76133 9.76205C2.64586 10.6465 2 11.9809 2 13.7308V15H3V13.7308Z" fill="#ffffff">
                </path>
              </svg>
              <p class="text-xs"> My Workspace </p>
            </li>
          </div>

          <div class="flex h-full">

            <ul class="icons-list w-20 h-full flex flex-col gap-y-1 border-r border-white/10">
                <li class="collections-icon text-white w-full flex justify-center items-center cursor-pointer">
                  <div class="mt-1 ml-1 mr-1 p-1 pt-2 pb-1 flex flex-col justify-center items-center truncate w-20 gap-y-1.5 text-[10px] text-white bg-[#3b3b3b] rounded-md">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2H14V1H2V2Z" fill="#ffffff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.74394 4C1.3022 4 0.970902 4.40413 1.05753 4.83728L2.97753 14.4373C3.04297 14.7645 3.33026 15 3.66394 15H12.336C12.6697 15 12.957 14.7645 13.0224 14.4373L14.9424 4.83728C15.0291 4.40413 14.6978 4 14.256 4H1.74394ZM3.90988 14L2.10988 5H13.8901L12.0901 14H3.90988Z" fill="#ffffff">
                      </path>
                    </svg>
                    <p> Collections </p>
                  </div>
                </li>
                <li class="environments-icon text-white w-full flex justify-center items-center cursor-pointer">
                  <div class="mt-1 ml-1 mr-1 p-1 pt-2 pb-1 flex flex-col justify-center items-center truncate w-20 gap-y-1.5 text-[10px] text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 2.5C1 1.67157 1.67157 1 2.5 1H13.5C14.3284 1 15 1.67157 15 2.5V10H14V2.5C14 2.22386 13.7761 2 13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H10V15H2.5C1.67157 15 1 14.3284 1 13.5V2.5Z" fill="#6B6B6B">
                      </path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 6.5C5 6.22386 5.22386 6 5.5 6H10.5C10.7761 6 11 6.22386 11 6.5V9.5C11 9.77614 10.7761 10 10.5 10H5.5C5.22386 10 5 9.77614 5 9.5V6.5ZM6 7V9H10V7H6Z" fill="#6B6B6B"></path><path d="M15 12H12V15H15V12Z" fill="#6B6B6B">
                      </path>
                    </svg>
                    <p> Environments </p>
                  </div>
                </li>
                <li class="history-icon text-white w-full flex justify-center items-center cursor-pointer">
                  <div class="mt-1 ml-1 mr-1 p-1 pt-2 pb-1 flex flex-col justify-center items-center truncate w-20 gap-y-1.5 text-[10px] text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 2C5.68629 2 3 4.68629 3 8C3 8.09598 3.00225 8.19141 3.0067 8.28623L4.14648 7.14645L4.85359 7.85355L2.50004 10.2071L0.146484 7.85355L0.853591 7.14645L2.00628 8.29914C2.00211 8.19992 2 8.1002 2 8C2 4.13401 5.13401 1 9 1C12.866 1 16 4.13401 16 8C16 11.866 12.866 15 9 15C7.37595 15 5.87982 14.4463 4.69205 13.5178L5.30795 12.7299C6.32611 13.5259 7.60699 14 9 14C12.3137 14 15 11.3137 15 8C15 4.68629 12.3137 2 9 2Z" fill="#6B6B6B">
                      </path>
                      <path d="M9 4H8V8.7831L10.7428 10.4287L11.2572 9.57125L9 8.2169V4Z" fill="#6B6B6B">
                      </path>
                    </svg>
                    <p> History </p>
                  </div>
                </li>
            </ul>

            <div class="extended-side-bar w-[300px] flex flex-col">

              <div class="esb-header w-full h-10 flex justify-center items-center mt-1">
                <ul class="w-full h-full flex justify-center items-center">
                  <li class="flex justify-evenly items-center gap-x-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                      <path d="M8.5 7.5V2H7.5V7.5H2V8.5H7.5V14H8.5V8.5H14V7.5H8.5Z" fill="#767676">
                      </path>
                    </svg>
                    <div class="w-56 h-6 rounded-[2px] border flex justify-end items-center border-white/10 relative">
                      <div class="search-input-wrapper absolute left-0 ml-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 2H1V3H15V2Z" fill="#767676">
                          </path>
                          <path d="M13.25 5.5H2.75V6.5H13.25V5.5Z" fill="#767676">
                          </path>
                          <path d="M4.5 9.5H11.5V10.5H4.5V9.5Z" fill="#767676">
                          </path>
                          <path d="M9.75 13H6.25V14H9.75V13Z" fill="#767676">
                          </path>
                        </svg>
                      </div>
                      <div class="search-input absolute left-0 w-full flex justify-end pl-8 text-white text-xs">
                        <input type="search" name="collection-search" id="collection-search" class="bg-transparent outline-none border-none w-full pr-2"/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="no-collection w-full h-full flex flex-col justify-start items-center mt-12">
                <div class="w-3/4 flex justify-center items-center px-2">
                  <img width="1000" height="800" src="https://skills-assets.pstmn.io/onboarding/GROWTH-48/collection-preview-without-access-dark.png" alt="collection-img"/>
                </div>
                <div class="my-6 mx-8 flex flex-col justify-center items-center text-center text-white">
                  <h4 class="font-semibold text-sm leading-6"> Create a collection for your requests </h4>
                  <span class="mt-2 text-xs font-normal leading-5 text-white/50"> 
                    A collection lets you group related requests and easily set common authorization, tests, scripts, and variables for all requests in it.
                  </span>
                  <div>
                    <button class="h-8 px-3 border border-white/40 rounded mt-4 flex justify-center items-center text-center"> <span class="text-xs"> Create Collection </span> </button>
                  </div>
                </div>
              </div>

            </div>

          </div>


        </div>

        <div class="container w-full h-full">

          <div class="requests-tabs-wrapper w-full h-10 border-b border-white/10 flex justify-start items-center">
              <div class="request-tab relative w-44 h-10 border-t-2 border-[#ff6c37] flex justify-between items-center after:w-full after:h-full after:absolute after:border-r after:border-white/10 before:w-full before:h-full before:absolute before:border-b before:border-[#212121]">
                <div class="flex justify-center items-center">
                  <div class="request-tab-method pl-2 text-[9px] text-[#f8de7b] font-semibold">
                    POST
                  </div>
                  <div class="request-tab-name text-[11px] leading-4 font-normal pl-1 text-white">
                    Untitled Request
                  </div>
                </div>
                <div class="close-icon w-6 h-6 flex justify-center items-center mr-1">
                  <button class="flex justify-center items-center rounded w-full h-full bg-gray-300/10">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                      <g clip-path="url(#clip0)">
                        <path d="M6.56065 5.85356L9.70711 2.70711L9 2L5.85355 5.14645L2.70711 2.00002L2 2.70712L5.14644 5.85356L2 9L2.70711 9.70711L5.85355 6.56067L9 9.70712L9.70711 9.00002L6.56065 5.85356Z" fill="#white">
                        </path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="12" height="12" fill="white">
                          </rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="requester-tab-actions w-20 h-full flex">
                <div class="add-action w-10 h-10 flex justify-center items-center p-1">
                  <button class="bg-gray-300/10 rounded w-full h-full flex justify-center items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 7.5V2H7.5V7.5H2V8.5H7.5V14H8.5V8.5H14V7.5H8.5Z" fill="white">
                      </path>
                    </svg>
                  </button>
                </div>
                <div class="more-action w-10 h-10 flex justify-center items-center p-1">
                  <button class="bg-gray-300/10 rounded w-full h-full flex justify-center items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="white"></path></svg>
                  </button>
                </div>
              </div>
          </div>

          <div class="request-editor w-full py-2 px-4 flex gap-x-2">

            <div class="w-full h-10 rounded border-white/30 border flex py-2">
                <div class="current-method w-28 h-full px-3 flex justify-between items-center relative">
                    <p class="text-xs text-[#fce17d]"> POST </p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="toggle-methods-list cursor-pointer">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z" fill="#919191">
                      </path>
                    </svg>
                    <div class="dropdown-list hidden p-2 bg-[#212121] border border-white/20 rounded absolute bottom-0 left-0 translate-y-[calc(100%+15px)]">
                      <button class="w-28 py-2 hover:bg-gray-300/20 rounded text-white text-xs flex justify-start item-center px-2">
                        GET
                      </button>
                      <button class="w-28 py-2 hover:bg-gray-300/20 rounded text-white text-xs flex justify-start item-center px-2">
                        POST
                      </button>
                      <button class="w-28 py-2 hover:bg-gray-300/20 rounded text-white text-xs flex justify-start item-center px-2">
                        PUT
                      </button>
                      <button class="w-28 py-2 hover:bg-gray-300/20 rounded text-white text-xs flex justify-start item-center px-2">
                        PATCH
                      </button>
                      <button class="w-28 py-2 hover:bg-gray-300/20 rounded text-white text-xs flex justify-start item-center px-2">
                        DELETE
                      </button>
                      <button class="w-28 py-2 hover:bg-gray-300/20 rounded text-white text-xs flex justify-start item-center px-2">
                        HEAD
                      </button>
                      <button class="w-28 py-2 hover:bg-gray-300/20 rounded text-white text-xs flex justify-start item-center px-2">
                        OPTIONS
                      </button>
                    </div>
                </div>
                <div class="request-input-wrapper w-full flex border-l border-white/10 px-3">
                  <input type="text" class="w-full py-1 bg-transparent outline-none text-xs text-white" placeholder="Enter URL or paste text"/>
                </div>
            </div>
            <button class="send-request bg-[#097bed] h-10 rounded flex justify-center items-center w-28 text-white hover:bg-[#0265d2]">
              <p class=""> Send </p>
            </button>

          </div>

          <div class="request-assets px-4">
            <ul class="flex justify-start items-center gap-x-4 h-8 w-full text-white/30 text-xs">
              <li class="py-2 cursor-pointer"> Params </li>
              <li class="py-2 cursor-pointer"> Authorization </li>
              <li class="py-2 cursor-pointer"> Headers </li>
              <li class="text-white border-b-2 border-[#ff6c37] py-2 cursor-pointer"> Body </li>
            </ul>
          </div>

          <div class="request-data-type">

            <div class="radio-group flex gap-x-4 text-xs text-white px-4 py-3">
              <label class="inline-flex items-center">
                <input type="radio" class="radio-input h-3 w-3 flex after:translate-x-1/4 after:translate-y-1/4 bg-gray-600 rounded-full relative after:absolute after:h-2 after:w-2 appearance-none checked:after:bg-[#ff6c37] after:rounded-full" name="body-type" value="none" />
                <span class="ml-2">None</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="radio-input h-3 w-3 after:translate-x-1/4 after:translate-y-1/4 bg-gray-600 rounded-full relative after:absolute after:h-2 after:w-2 appearance-none checked:after:bg-[#ff6c37] after:rounded-full" name="body-type" value="params" />
                <span class="ml-2">Form-data</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="radio-input h-3 w-3 relative after:translate-x-1/4 after:translate-y-1/4 bg-gray-600 rounded-full after:absolute after:h-2 after:w-2 appearance-none checked:after:bg-[#ff6c37] after:rounded-full" name="body-type" value="urlencoded" />
                <span class="ml-2">x-www-form-urlencoded</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="radio-input h-3 w-3 after:translate-x-1/4 after:translate-y-1/4 bg-gray-600 rounded-full relative after:absolute after:h-2 after:w-2 appearance-none checked:after:bg-[#ff6c37] after:rounded-full" name="body-type" value="raw" checked />
                <span class="ml-2">Raw</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="radio-input h-3 w-3 after:translate-x-1/4 after:translate-y-1/4 bg-gray-600 rounded-full relative after:absolute after:h-2 after:w-2 appearance-none checked:after:bg-[#ff6c37] after:rounded-full" name="body-type" value="binary" />
                <span class="ml-2">Binary</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="radio-input h-3 w-3 after:translate-x-1/4 after:translate-y-1/4 bg-gray-600 rounded-full relative after:absolute after:h-2 after:w-2 appearance-none checked:after:bg-[#ff6c37] after:rounded-full" name="body-type" value="graphql" />
                <span class="ml-2">GraphQL</span>
              </label>
            </div>

          </div>
          
          <div class="body-data px-4 text-[unset]">
            <div class="px-2 w-full h-44  border flex justify-center items-center border-white/20">
              <textarea name="data-input" id="data-input" class="text-xs h-full p-2 outline-none w-full bg-transparent resize-none text-white"></textarea>
            </div>
          </div>

          <div class="request-response-header w-full h-8 px-4 flex justify-between items-center text-xs text-white border-t-2 border-white/10 mt-3">
              <div class="flex justify-center items-center">
                <p> Response </p>
              </div>
              <div class="request-response-status">
                <div class="response-status-code flex justify-start items-center gap-x-3">
                  <svg width="16" height="16" viewBox="0 0 16 16"><defs><path id="network-secure" d="M7 14C7.25621 14 7.61626 13.8497 8 13.4043V14.9291C7.6734 14.9758 7.33952 15 7 15C3.13401 15 0 11.866 0 8C0 4.13401 3.13401 1 7 1C10.1952 1 12.8904 3.14083 13.7295 6.06637C13.493 6.02278 13.2491 6 13 6H12.6586C12.5319 5.64144 12.372 5.29852 12.1827 4.97492C11.6348 5.31335 11.009 5.59672 10.326 5.81425C10.3539 5.98431 10.3787 6.15725 10.4001 6.33279C10.0573 6.48255 9.73957 6.67897 9.45489 6.91402C9.43054 6.62449 9.39671 6.34289 9.3543 6.07052C8.61147 6.22804 7.81942 6.31246 6.99994 6.31246C6.18051 6.31246 5.3885 6.22805 4.64569 6.07054C4.55187 6.67322 4.5 7.32109 4.5 8C4.5 8.67895 4.55187 9.32686 4.64571 9.92958C5.38851 9.77207 6.18051 9.68766 6.99994 9.68766C7.34156 9.68766 7.67841 9.70233 8.00891 9.73085C8.003 9.8198 8 9.90955 8 10V10.734C7.67457 10.7035 7.34064 10.6877 6.99994 10.6877C6.24147 10.6877 5.51656 10.7664 4.84427 10.9097C4.99643 11.5114 5.19259 12.0486 5.41955 12.5025C5.99978 13.663 6.61633 14 7 14ZM4.84424 5.09045C4.9964 4.4887 5.19258 3.95142 5.41955 3.49747C5.99978 2.33702 6.61633 2 7 2C7.38367 2 8.00022 2.33702 8.58045 3.49747C8.80742 3.95141 9.00359 4.48869 9.15576 5.09042C8.48343 5.2337 7.75847 5.31246 6.99994 5.31246C6.24146 5.31246 5.51654 5.23371 4.84424 5.09045ZM11.6064 4.15516C11.1699 4.41889 10.6703 4.64698 10.1212 4.82928C9.87367 3.85659 9.51582 3.01503 9.0806 2.37055C10.0724 2.73725 10.9408 3.35856 11.6064 4.15516ZM3.87879 4.82932C3.32965 4.64702 2.83005 4.41893 2.39356 4.1552C3.05918 3.35859 3.92757 2.73726 4.9194 2.37055C4.48418 3.01504 4.12632 3.85661 3.87879 4.82932ZM1.81725 4.97497C2.36521 5.3134 2.99104 5.59676 3.674 5.81428C3.56108 6.502 3.5 7.23673 3.5 8C3.5 8.76331 3.56109 9.49809 3.67402 10.1858C2.99107 10.4033 2.36525 10.6867 1.81731 11.0251C1.29776 10.1369 1 9.10325 1 8C1 6.89679 1.29774 5.86312 1.81725 4.97497ZM4.9194 13.6294C3.9276 13.2628 3.05923 12.6415 2.39363 11.8449C2.83011 11.5812 3.32969 11.3531 3.87882 11.1708C4.12634 12.1435 4.48419 12.985 4.9194 13.6294Z M12.75 12.4331C12.8995 12.3467 13 12.1851 13 12C13 11.7239 12.7761 11.5 12.5 11.5C12.2239 11.5 12 11.7239 12 12C12 12.1851 12.1005 12.3467 12.25 12.4331V13.5H12.75V12.4331Z M10.5 10H10C9.44772 10 9 10.4477 9 11V14C9 14.5523 9.44771 15 10 15H15C15.5523 15 16 14.5523 16 14V11C16 10.4477 15.5523 10 15 10H14.5L14.5 8.98224C14.5003 8.77423 14.5009 8.28481 14.245 7.84378C13.9502 7.33553 13.3895 7 12.5 7C11.6105 7 11.0499 7.33553 10.755 7.84378C10.4992 8.28481 10.4998 8.77423 10.5 8.98224L10.5 10ZM11.62 8.34556C11.5085 8.53789 11.5 8.78247 11.5 9V10H13.5V9C13.5 8.78247 13.4916 8.53789 13.38 8.34556C13.2999 8.20736 13.1105 8 12.5 8C11.8895 8 11.7002 8.20736 11.62 8.34556ZM15 11H10V14H15V11Z"></path></defs><use fill="#A9A9A9" fill-rule="evenodd" href="#network-secure"></use></svg>
                 <p> Status: <span class="text-[#51a350]"> 200 OK </span> </p>
                 <p> Time: <span class="text-[#51a350]"> 932 ms </span> </p>
                 <p> Sizw: <span class="text-[#51a350]"> 1.02 KB </span> </p>
                </div>
              </div>
          </div>

          <div class="request-response-body w-full">
            <div class="px-2 w-full h-72 flex justify-center items-center">
              <textarea name="data-input" id="data-input" class="text-xs h-full p-2 outline-none w-full bg-transparent resize-none text-white"></textarea>
            </div>
          </div>

        </div>

      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
