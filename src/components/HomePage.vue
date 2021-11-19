<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-18 08:18:54
 * @LastEditTime: 2021-11-19 14:35:45
 * @LastEditors: MArio
-->
<template>
  <div id="homePage">
    <div class="fandramTable">
      <table>
        <tr>
          <td>
            <div class="fandramCTable">
              <div class="fandramCTableCorld">频道</div>
              <div
                v-show="disp == 1 || der == true"
                @click="changeDisp(2)"
                class="fandramCardBoutton"
              >
                <div class="fandramCardBouttonText">
                  {{ option.option1.target }}
                </div>
                <div class="fandramCardBouttonIcon">
                  <svg
                    t="1634449125780"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="25887"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M192 396.8L272 320l240 236.16L752 320l80 76.8L512 704z"
                      fill="#0590DF"
                      p-id="25888"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                v-if="disp == 2"
                @click="changeDisp(1)"
                class="fandramCardBouttondropdown"
              >
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On1', 0)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On1'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On1'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option1.dropdown[0].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option1.dropdown[1].name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>

          <td>
            <div class="fandramCTable">
              <div class="fandramCTableCorld">作品分类</div>
              <div
                v-show="disp == 3 || der == true"
                @click="changeDisp(4)"
                class="fandramCardBoutton"
              >
                <div class="fandramCardBouttonText">
                  {{ option.option2.target }}
                </div>
                <div class="fandramCardBouttonIcon">
                  <svg
                    t="1634449125780"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="25887"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M192 396.8L272 320l240 236.16L752 320l80 76.8L512 704z"
                      fill="#0590DF"
                      p-id="25888"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                v-if="disp == 4"
                @click="changeDisp(3)"
                class="fandramCardBouttondropdown"
              >
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On1', 0)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropT.name == 'fanKo1On1'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropT.name === 'fanKo1On1'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option2.dropdown[0].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropT.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropT.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option2.dropdown[1].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropT.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropT.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option2.dropdown[2].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropT.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropT.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option2.dropdown[3].name }}
                    </div>
                  </div>
                </div>

                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropT.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropT.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option2.dropdown[4].name }}
                    </div>
                  </div>
                </div>

                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropT.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropT.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option2.dropdown[5].name }}
                    </div>
                  </div>
                </div>

                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropT.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropT.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option2.dropdown[6].name }}
                    </div>
                  </div>
                </div>

                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropT.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropT.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option2.dropdown[7].name }}
                    </div>
                  </div>
                </div>

                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropT.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropT.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option2.dropdown[8].name }}
                    </div>
                  </div>
                </div>

                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropT.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropT.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option2.dropdown[9].name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="fandramCTable">
              <div class="fandramCTableCorld">写作进度</div>
              <div
                v-show="disp == 1 || der == true"
                @click="changeDisp(2)"
                class="fandramCardBoutton"
              >
                <div class="fandramCardBouttonText">
                  {{ option.option3.target }}
                </div>
                <div class="fandramCardBouttonIcon">
                  <svg
                    t="1634449125780"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="25887"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M192 396.8L272 320l240 236.16L752 320l80 76.8L512 704z"
                      fill="#0590DF"
                      p-id="25888"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                v-if="disp == 2"
                @click="changeDisp(1)"
                class="fandramCardBouttondropdown"
              >
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On1', 0)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On1'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On1'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option3.dropdown[0].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option3.dropdown[1].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option3.dropdown[2].name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="fandramCTable">
              <div class="fandramCTableCorld">作品字数</div>
              <div
                v-show="disp == 1 || der == true"
                @click="changeDisp(2)"
                class="fandramCardBoutton"
              >
                <div class="fandramCardBouttonText">
                  {{ option.option4.target }}
                </div>
                <div class="fandramCardBouttonIcon">
                  <svg
                    t="1634449125780"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="25887"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M192 396.8L272 320l240 236.16L752 320l80 76.8L512 704z"
                      fill="#0590DF"
                      p-id="25888"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                v-if="disp == 2"
                @click="changeDisp(1)"
                class="fandramCardBouttondropdown"
              >
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On1', 0)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On1'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On1'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option4.dropdown[0].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option4.dropdown[1].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option4.dropdown[2].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option4.dropdown[3].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option4.dropdown[4].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option4.dropdown[5].name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="fandramCTable">
              <div class="fandramCTableCorld">更新时间</div>
              <div
                v-show="disp == 1 || der == true"
                @click="changeDisp(2)"
                class="fandramCardBoutton"
              >
                <div class="fandramCardBouttonText">
                  {{ option.option5.target }}
                </div>
                <div class="fandramCardBouttonIcon">
                  <svg
                    t="1634449125780"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="25887"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M192 396.8L272 320l240 236.16L752 320l80 76.8L512 704z"
                      fill="#0590DF"
                      p-id="25888"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                v-if="disp == 2"
                @click="changeDisp(1)"
                class="fandramCardBouttondropdown"
              >
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On1', 0)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On1'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On1'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option5.dropdown[0].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option5.dropdown[1].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option5.dropdown[2].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option5.dropdown[3].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option5.dropdown[4].name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="fandramCTable">
              <div class="fandramCTableCorld">书名首字母</div>
              <div
                v-show="disp == 1 || der == true"
                @click="changeDisp(2)"
                class="fandramCardBoutton"
              >
                <div class="fandramCardBouttonText">
                  {{ option.option6.target }}
                </div>
                <div class="fandramCardBouttonIcon">
                  <svg
                    t="1634449125780"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="25887"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M192 396.8L272 320l240 236.16L752 320l80 76.8L512 704z"
                      fill="#0590DF"
                      p-id="25888"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                v-if="disp == 2"
                @click="changeDisp(1)"
                class="fandramCardBouttondropdown NeworldscroE"
                style="height: 300px"
              >
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On1', 0)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On1'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On1'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[0].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[1].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[2].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[3].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[4].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[5].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[6].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[7].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[8].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[9].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[10].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[11].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[12].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[13].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[14].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[15].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[16].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[17].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[18].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[19].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[20].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[21].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[22].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[23].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[24].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[25].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option6.dropdown[26].name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="fandramCTable">
              <div class="fandramCTableCorld">签约状态</div>
              <div
                v-show="disp == 1 || der == true"
                @click="changeDisp(2)"
                class="fandramCardBoutton"
              >
                <div class="fandramCardBouttonText">
                  {{ option.option7.target }}
                </div>
                <div class="fandramCardBouttonIcon">
                  <svg
                    t="1634449125780"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="25887"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M192 396.8L272 320l240 236.16L752 320l80 76.8L512 704z"
                      fill="#0590DF"
                      p-id="25888"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                v-if="disp == 2"
                @click="changeDisp(1)"
                class="fandramCardBouttondropdown"
              >
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On1', 0)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On1'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On1'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option7.dropdown[0].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option7.dropdown[1].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option7.dropdown[2].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option7.dropdown[3].name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="fandramCTable">
              <div class="fandramCTableCorld">尽情期待</div>
              <div
                v-show="disp == 1 || der == true"
                @click="changeDisp(2)"
                class="fandramCardBoutton"
              >
                <div class="fandramCardBouttonText">
                  {{ option.option8.target }}
                </div>
                <div class="fandramCardBouttonIcon">
                  <svg
                    t="1634449125780"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="25887"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M192 396.8L272 320l240 236.16L752 320l80 76.8L512 704z"
                      fill="#0590DF"
                      p-id="25888"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                v-if="disp == 2"
                @click="changeDisp(1)"
                class="fandramCardBouttondropdown"
              >
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On1', 0)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On1'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On1'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option8.dropdown[0].name }}
                    </div>
                  </div>
                </div>
                <div class="fandramCardBouttondropdownCard">
                  <div
                    @click="changeView('fanKo1On2', 1)"
                    class="fandramCardBouttondropdownCardInfo"
                    :style="
                      dropRs.dropR.name == 'fanKo1On2'
                        ? 'background-color:rgb(204 207 207);'
                        : ''
                    "
                  >
                    <div
                      v-if="dropRs.dropR.name === 'fanKo1On2'"
                      class="DaoHanCardLeftPross"
                    ></div>
                    <div v-else class="DaoHanCardLeftProssNo"></div>
                    <div class="fandramCardBouttondropdownCardText">
                      {{ option.option8.dropdown[1].name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="dailyNewShuaXin">
              <div class="dailyNewShuaXinIcon">
                <div class="ech-rotate360">
                  <svg
                    t="1634446435296"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="25063"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M274.3 758.2l179.4 138.6c37.6 29 92.1 2.3 92.1-45.2v-38.4c161.1-1.1 291.6-136.3 291.6-303.7 0-36.5-6.1-68.9-16.2-101.3-40.5 117.5-147.8 202.5-275.4 202.5v-36.4c0-47.5-54.5-74.2-92.1-45.2L274.3 667.8c-29.6 22.8-29.6 67.5 0 90.4z"
                      fill="#2867CE"
                      p-id="25064"
                    ></path>
                    <path
                      d="M753.7 268.2L574.3 129.6c-37.6-29-92.1-2.3-92.1 45.2v38.4c-161.1 1.1-291.6 136.3-291.6 303.7 0 36.5 6.1 68.9 16.2 101.3 40.5-117.5 147.8-202.5 275.4-202.5v36.4c0 47.5 54.5 74.2 92.1 45.2l179.4-138.7c29.6-22.8 29.6-67.5 0-90.4z"
                      fill="#2867CE"
                      p-id="25065"
                    ></path>
                    <path
                      d="M483.3 462.8V164c-0.6 3.5-1 7-1 10.8v38.4c-161.1 1.1-291.6 136.3-291.6 303.7 0 36.5 6.1 68.9 16.2 101.3 40.5-117.5 147.8-202.5 275.4-202.5v36.4c0 3.7 0.3 7.3 1 10.7zM545.8 610.8v-36.4c0-3.7-0.4-7.3-1-10.8v298.9c0.6-3.5 1-7 1-10.8v-38.4c161.1-1.1 291.6-136.3 291.6-303.7 0-36.5-6.1-68.9-16.2-101.3-40.5 117.4-147.9 202.5-275.4 202.5z"
                      fill="#BDD2EF"
                      p-id="25066"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="dailyNewShuaXinText" @click="doInit()">刷新</div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="dailyNewDropdownColumn2 Neworldscro">
      <table>
        <tr v-for="item in dataCard" :key="item.id">
          <td v-for="item2 in item" :key="item2.id">
            <div class="dailyNewColumnCard">
              <div class="dailyNewColumnCardLeft">
                <img class="dailyNewColumnCardLeftImg" :src="item2.src" />
              </div>
              <div class="dailyNewColumnCardRight">
                <span class="dailyNewColumnCardRightTitle">
                  {{ item2.alt }}
                </span>
                <div class="dailyNewColumnCardRightContent">
                  {{ item2.text1 }}
                </div>
                <div class="dailyNewColumnCardRightButton">
                  {{ item2.text2 }}
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var cheerio = require("cheerio");
export default {
  name: "homePage",
  data() {
    return {
      dataCard: [[]],
      indexPage: 0,
      indexUrl: "",
      disp: 1,
      der: true,
      dropRs: {
        dropR: { name: "fanKo1On1" },
        dropT: { name: "fanKo2On1" },
        dropY: { name: "fanKo3On1" },
        dropU: { name: "fanKo4FOn1" },
        dropI: { name: "fanKo5FOn1" },
        dropO: { name: "fanKo6FOn1" },
        dropP: { name: "fanKo7FOn1" },
      },
      option: {
        option1: {
          dropdown: [{ name: "男生频道" }, { name: "女生频道" }],
          target: "男生频道",
        },
        option2: {
          dropdown: [
            { name: "全部作品" },
            { name: "奇幻玄幻" },
            { name: "武侠仙侠" },
            { name: "历史军事" },
            { name: "都市娱乐" },
            { name: "科幻游戏" },
            { name: "悬疑灵异" },
            { name: "竞技同人" },
            { name: "评论文集" },
            { name: "二次元" },
          ],
          target: "全部作品",
        },
        option3: {
          dropdown: [{ name: "全部" }, { name: "连载中" }, { name: "已完结" }],
          target: "全部",
        },
        option4: {
          dropdown: [
            { name: "全部" },
            { name: "30万字以下" },
            { name: "30万-50万" },
            { name: "50万-100万" },
            { name: "100万-200万" },
            { name: "200万以上" },
          ],
          target: "全部",
        },
        option5: {
          dropdown: [
            { name: "全部" },
            { name: "三日内" },
            { name: "七日内" },
            { name: "半月内" },
            { name: "一月内" },
          ],
          target: "全部",
        },
        option6: {
          dropdown: [
            { name: "全部" },
            { name: "A" },
            { name: "B" },
            { name: "C" },
            { name: "D" },
            { name: "E" },
            { name: "F" },
            { name: "G" },
            { name: "H" },
            { name: "I" },
            { name: "J" },
            { name: "K" },
            { name: "L" },
            { name: "M" },
            { name: "N" },
            { name: "O" },
            { name: "P" },
            { name: "Q" },
            { name: "R" },
            { name: "S" },
            { name: "T" },
            { name: "U" },
            { name: "V" },
            { name: "W" },
            { name: "X" },
            { name: "Y" },
            { name: "Z" },
          ],
          target: "全部",
        },
        option7: {
          dropdown: [
            { name: "不限" },
            { name: "免费" },
            { name: "VIP" },
            { name: "只看签约" },
          ],
          target: "不限",
        },
        option8: {
          dropdown: [{ name: "白色资源" }, { name: "灰色资源" }],
          target: "白色资源",
        },
      },
    };
  },
  created() {
    axios
      .get("/data.json")
      .then((resp) => {
        this.indexPage = resp.data.indexPage;
        this.indexUrl = resp.data.indexUrl;
        this.doInit();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    doInit() {
      axios
        .get(this.indexUrl, { timeout: 120000 })
        .then((resp) => {
          // console.log(resp.data);
          var $ = cheerio.load(resp.data);
          var arr1 = [];
          $("div.store_list_wrap div.bookbox").each(function (i, e) {
            var pro = {
              href: $($(e).children("div.bookimg")).children("a").attr("href"),
              src: $($($(e).children("div.bookimg")).children("a"))
                .children("img")
                .attr("src"),
              alt: $($($(e).children("div.bookimg")).children("a"))
                .children("img")
                .attr("alt"),
              text1: $($(e).children("div.bookinfo"))
                .children("div.bookintro")
                .text(),
              text2: $(
                $($(e).children("div.bookinfo")).children("div.bookupdate")
              )
                .children("a")
                .text(),
            };
            // console.log($($(e).children("div.bookimg")).children("a").attr("href"));
            // console.log($($($(e).children("div.bookimg")).children("a")).children("img").attr("src"));
            // console.log($($($(e).children("div.bookimg")).children("a")).children("img").attr("alt"));
            // console.log($($(e).children("div.bookinfo")).children("div.bookintro").text());
            // console.log($($($(e).children("div.bookinfo")).children("div.bookupdate")).children("a").text());
            arr1.push(pro);
          });

          //把 arr 的一维数组先转成二维的，然后再在 vue 里面渲染
          var dataCard = arr1.reduce(
            (pre, next, idx) => {
              // reduce 用来便利数组，具体语法就 rtfm 吧
              const inner = pre[~~(idx / 4)]; // ~~用来取整，inner 是内层数组
              if (inner !== undefined) {
                // 判断有没有内层数组
                inner.push(next); // 如果有就把遍历的值 next push 到内层数组里
              } else {
                pre.push([next]); // 没有就新建一个包含 next 的数组，作为内层数组
              }
              return pre;
            },
            [[]]
          );

          for (var i = 0; i <= dataCard.length - 2; i++) {
            this.dataCard.push(dataCard[i]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeDisp(e) {
      this.disp = e;
    },
    changeView(e, v) {
      switch (e) {
        case "fanKo1On1":
          this.option.option1.target = this.option.option1.dropdown[v].name;
          this.dropRs.dropR.name = e;
          break;
        case "fanKo1On2":
          this.option.option1.target = this.option.option1.dropdown[v].name;
          this.dropRs.dropR.name = e;
          break;
      }
    },
  },
};
</script>

<style scoped>
.dailyNewShuaXinText {
  float: left;
}
.dailyNewShuaXinIcon {
  float: left;
  padding-top: 2px;
  margin-right: 3px;
}
.dailyNewShuaXin {
  float: right;
  width: 60px;
  height: 30px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding-top: 2px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 15%);
  cursor: pointer;
  right: 2%;
  position: absolute;
  top: 11%;
}
.dailyNewShuaXin:hover {
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
}
.dailyNewColumnCardRightButton {
  color: #7e758e;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: absolute;
  bottom: 15px;
  width: 98%;
}
.dailyNewColumnCardRightContent {
  margin-top: 30%;
  color: #7e758e;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dailyNewColumnCardRightTitle {
  color: #7e758e;
  font-size: 13px;
}
.dailyNewColumnCardRight {
  float: left;
  margin-left: 5px;
  height: 100%;
  width: 52%;
  padding-top: 5px;
  position: relative;
}
.dailyNewColumnCardLeftImg {
  width: 100%;
  height: 100%;
  border-radius: 5px;

  object-fit: cover;
  object-position: top;
}
.dailyNewColumnCardLeft {
  float: left;
  width: 40%;
  height: 90%;
  margin: 8px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
.dailyNewColumnCard {
  width: 302px;
  height: 180px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
  margin: 3px;
  margin-right: 15px;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
}
.dailyNewColumnCard:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -5px);
  transition-delay: 0s !important;
}
.dailyNewDropdownColumn2 {
  width: 100%;
  height: 89.5%;
}
.DaoHanCardLeftPross {
  float: left;
  width: 4px;
  height: 55%;
  background-color: #3b4452;
  border-radius: 5px;
  margin-top: 8px;
  margin-left: 3px;
}
.DaoHanCardLeftProssNo {
  float: left;
  width: 4px;
  height: 55%;
  /* background-color: #3b4452; */
  border-radius: 5px;
  margin-top: 8px;
  margin-left: 3px;
}
.fandramCardBouttondropdownCardText {
  float: left;
  margin-top: 5px;
  margin-left: 10px;
}
.fandramCardBouttondropdownCardInfo {
  width: 95%;
  height: 35px;
  margin-left: 3px;
  border-radius: 4px;
  box-shadow: none;
  cursor: default;
}
.fandramCardBouttondropdownCardInfo:hover {
  /* background-color: #eaeaea; */
  background-color: rgb(204 207 207);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
}
.fandramCardBouttondropdownCard {
  width: 100%;
  height: 35px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.fandramCardBouttondropdown {
  width: 100%;
  /* height: 125px; */
  background-color: #e9e9e9;
  border: 1px solid #dadada;
  /* box-shadow: 0 1px 1px 0 rgba(20, 20, 20, 0.15); */
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  z-index: 2;
  border-radius: 6px;
  position: absolute;
  top: 20px;
  margin-bottom: 5px;
}
.fandramCardBouttonIcon {
  float: right;
  margin-right: 10px;
  margin-top: 8px;
}
.fandramCardBouttonText {
  float: left;
  margin-top: 5px;
}
.fandramCardBoutton {
  width: 116px;
  height: 35px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding-left: 12px;
  margin-top: 5px;
  /* margin: 5px; */
}
.fandramCardBoutton:hover {
  background-color: #ececf0;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(170, 161, 161);
  transition: all 0.2s ease-in-out;
}
.fandramCTableCorld {
  font-size: 13px;
  text-align: left;
  margin-left: 3px;
}
.fandramCTable {
  width: 128px;
  height: 60px;
  margin: 6px;

  position: relative;
}

.fandramTable {
  width: 100%;
  height: 80px;
}
#homePage {
  border-radius: 3px;
  width: 97.5%;
  height: 92%;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
}
.Neworldscro {
  /* height: 430px; */
  overflow-y: auto;
}
.Neworldscro::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 7px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.Neworldscro::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.Neworldscro::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #f1f6fa;
}
.NeworldscroE {
  /* height: 430px; */
  overflow-y: auto;
}
.NeworldscroE::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.NeworldscroE::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.NeworldscroE::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #f1f6fa;
}
</style>
