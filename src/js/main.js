const hero_list = document.querySelector(".hero_list")

import { getData } from "./service.js";

const renderData = async () => {
    const data = await getData()
    hero_list.innerHTML = data.map((item) => `
                <li class="bg-[#fff] flex justify-between items-center pt-[28px] pr-[38px] pb-[28px] pl-[38px] rounded-[10px] mb-[20px]">
                    <div class="flex gap-[40px]">
                        <div class="w-[40px] h-[53px] pt-[14px] pb-[8px] bg-[#f2f4fe] rounded-[10px]">
                            <div class="pl-[16px] pr-[16px]">
                                <img src="./img/top_icon.svg" alt="img" />
                            </div>
                            <p class="text-[#3a4374] pl-[9px] pr-[9px] text-[13px] font-[700]">${item.id}</p>
                        </div>
                        <div>
                            <h2 class="font-bold text-[18px] text-[#3a4374] mb-[4px]">${item.title}</h2>
                            <p class="font-normal text-[16px] text-[#647196] mb-[12px]">${item.description}</p>
                            <a class="bg-[#f2f4ff] rounded-[10px] pt-[5px] pr-[16px] pb-[5px] pl-[16px] font-semibold text-[13px] text-[#4661e6]" href="#">${item.type}</a>
                        </div>
                    </div>
                    <div class="flex gap-[8px] justify-center">
                        <img src="./img/com_icon.svg" alt="img">
                        <p>${item.votes}</p>
                    </div>
                </li>
    `).join("")
}

renderData()