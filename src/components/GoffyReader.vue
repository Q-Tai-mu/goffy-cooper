<template>
  <div id="goffyReader">
    <div class="goffyAisde">
      <div class="goffyAisdeTitle">
        <span>{{ bookTitle }}</span>
      </div>
      <div class="goffyAisdechapter Neworldscro">
        <table style="width: 100%">
          <tr v-for="item in ChapterColumn" :key="item.id">
            <td>
              <div class="goffyAisdeCard">
                <div
                  :class="
                    confirm == item.id
                      ? 'goffyAisdeCardInfo'
                      : 'goffyAisdeCardInfoN'
                  "
                  @click="changeView(item)"
                >
                  <div class="goffyAisdeChapterpoint">
                    <svg
                      t="1637218941526"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2750"
                      width="18"
                      height="18"
                    >
                      <path
                        d="M512.263139 736.662966c-3.160734 0-6.320444-0.849825-9.123843-2.550499-130.040603-78.881149-196.369943-151.690659-202.770249-222.590621a17.344617 17.344617 0 0 1-0.070648-1.581903v-19.228567c0-0.542659 0.025597-1.084295 0.075767-1.624906 6.316349-68.094517 58.093206-103.233238 103.527093-107.064616 6.62249-0.564161 13.048395-0.851873 19.082151-0.851873 43.264274 0 68.37199 15.139168 89.279729 34.311421 20.908762-19.173277 46.016478-34.311421 89.27768-34.311421 6.031708 0 12.457613 0.287712 19.100581 0.854944 45.411362 3.829331 97.188219 38.966004 103.519926 107.059498 0.05017 0.541635 0.075768 1.084295 0.075767 1.629001v19.228566c0 0.528325-0.022525 1.055626-0.070648 1.581903-6.400307 70.892796-72.731694 143.702305-202.779464 222.590622a17.59035 17.59035 0 0 1-9.123842 2.548451zM335.485242 509.112643c5.573008 56.464204 65.026957 120.129394 176.777897 189.32254 111.756059-69.19929 171.214104-132.864479 176.787111-189.32254v-17.55349c-4.772329-47.430464-40.261219-71.850129-71.382213-74.474346-5.670277-0.484298-11.089702-0.727982-16.127218-0.727983-38.802182 0-55.540659 14.260675-76.651127 36.015166a17.595469 17.595469 0 0 1-25.254131 0c-21.109444-21.754491-37.850993-36.015166-76.653175-36.015166-5.039564 0-10.460012 0.243685-16.108788 0.725935-31.141472 2.626266-66.628314 27.047979-71.38938 74.474347v17.555537z m176.783016 378.216072c-206.957941 0-375.328715-168.371798-375.328715-375.328715S305.310317 136.671285 512.268258 136.671285s375.328715 168.371798 375.328715 375.328715-168.370774 375.328715-375.328715 375.328715z m0-715.470587c-187.55429 0-340.141872 152.587582-340.141872 340.141872S324.713968 852.141872 512.268258 852.141872s340.141872-152.587582 340.141872-340.141872-152.587582-340.141872-340.141872-340.141872z"
                        fill="#272636"
                        p-id="2751"
                      ></path>
                    </svg>
                  </div>
                  <div class="goffyAisdeCardInfoText">
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="goffyBody">
      <div class="reader_box">
        <div
          @click="setclick('No1On')"
          class="marker"
          tomeid="2430163"
          chapterid="66324239"
          data-sa-d='{"page_module":"readPage","click_name":"bookmark","book_id":"1119704"}'
        ></div>
        <div class="title">
          <div class="iconbox">
            <em class=""></em>
          </div>
          <div class="title_txtbox">{{ headWord }}</div>
        </div>
        <div class="bookinfo">
          <div class="bookinfo">
            作者：<a style="text-decoration:none;"
              >{{author}}</a
            >&nbsp;&nbsp;|&nbsp;&nbsp;字数：<span>{{numberWords}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;更新时间：<span
              >{{updateTime}}</span
            >
            
          </div>
        </div>
        <div class="reader_line"></div>
        <div
          class="content NeworldscroE"
          v-html="contentValue"
          itemprop="acticleBody"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
var cheerio = require("cheerio");
export default {
  name: "goffyReader",
  computed: {
    url: {
      get(){
        return this.$store.getters.getUrl;
      },
      set(val) {
        this.SET_URL(val);
      },
    },
    view: {
      get() {
        return this.$store.getters.getView;
      },
      set(val) {
        this.SET_VIEW(val);
      },
    },
  },
  data() {
    return {
      updateTime: "***..",
      numberWords: "***..",
      author: "***..",
      bookTitle: "加载中",
      headWord: "章节标题",
      contentValue: "",
      defaultReading: "",
      peruser: "",
      catalogue: "",
      confirm: "0",
      ChapterColumn: [{ name: "加载中", id: "0" }],
    };
  },
  watch: {
    url: function (newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      axios
        .get(newValue)
        .then((resp) => {
          var $ = cheerio.load(resp.data);
          // console.log($("div.book-name").text());
          this.bookTitle = $("div.book-name").text();

          // console.log("全部目录"+$($($("div.btn-group")).children("div.fr")).children("a.all-catalog").attr('href'));
          // console.log($($($("div.btn-group")).children("a.btn")).attr("href"));
          this.defaultReading = $($($("div.btn-group")).children("a.btn")).attr(
            "href"
          );
          this.catalogue = $($($("div.btn-group")).children("div.fr"))
            .children("a.all-catalog")
            .attr("href");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    catalogue(newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      axios
        .get(newValue)
        .then((resp) => {
          var $ = cheerio.load(resp.data);
          var arr1 = [];
          $("ul.chapter-list li").each(function (i, e) {
            var pro = {
              href: $(e).children("a").attr("href"),
              name: $(e).children("a").text(),
              id: i,
            };
            arr1.push(pro);
          });
          this.ChapterColumn = arr1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    defaultReading(newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);

      axios
        .get(newValue)
        .then((resp) => {
          var $ = cheerio.load(resp.data);
        
          this.contentValue = $("div.content").html();
          this.headWord = $("div.title_txtbox").text();
          this.author = $($($("div.bookinfo")).children("a")[0]).text();
          this.numberWords = $($($("div.bookinfo")).children("span")[0]).text();
          this.updateTime = $($($("div.bookinfo")).children("span")[1]).text();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  methods: {
    ...mapMutations(["SET_VIEW"]),
    setclick(val) {
      this.view = val;
    },
    changeView(e) {
      this.defaultReading = e.href;
      this.confirm = e.id;
    },
  },
};
</script>

<style>
.reader_box .content p {
  color: #333;
  /* -moz-user-select: none; */
  -webkit-user-select: none;
}
.reader_box .content p {
  letter-spacing: 1px;
  line-height: 1.2em;
  text-indent: 0em;
  padding: 0.5em 0.3em;
}
.r_count {
  cursor: pointer;
  position: relative;
  border: 1px solid #b3b3b3;
  border-radius: 2px;
  min-width: 34px;
  height: 18px;
  line-height: 18px;
  display: inline-block;
  text-align: center;
  text-indent: 0;
  color: #999;
  margin-left: 15px;
}
.content {
  padding: 30px 0 50px;
  height: 66%;
}
.reader_line {
  border-top: 1px dotted #ccc;
  height: 1px;
  overflow: hidden;
  display: block;
}
.bookinfo {
  text-align: center;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  letter-spacing: 0.86px;
  line-height: 23px;
  padding-bottom: 20px;
  position: relative;
}
.title_txtbox {
  line-height: 40px;
  font-size: 28px;
  color: #333;
  letter-spacing: 1.08px;
  display: inline;
  font-weight: 700;
}
.iconbox {
  display: inline-block;
}
.title {
  padding-top: 30px;
  padding-bottom: 10px;
  text-align: center;
}
.marker {
  width: 17px;
  height: 26px;
  background-image: url(http://rcode.zongheng.com/v2018/images/reader_ico.png);
  position: absolute;
  right: 18px;
  top: 0;
  cursor: pointer;
  background-position: -120px 0;
}
.reader_box {
  width: 760px;
  padding: 0 100px;
  position: relative;
  margin: 0 auto;
  /* border-bottom: 1px solid #ccc; */
  height: 100%;
}
.goffyAisdeCardInfoText {
  float: left;
  width: 80%;
  text-align: left;
  font-size: 18px;
  font-family: cursive;
  font-weight: bold;
  /* height: 100%; */
  padding-top: 3.5%;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goffyAisdeChapterpoint {
  float: left;
  padding: 10px;
}
.goffyAisdeCardInfoN {
  background-color: #f1f1f1;
  border-radius: 3px;
  width: 94%;
  height: 100%;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  /* -webkit-box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15); */
  /* box-shadow: 0 4px 16px rgba(48, 55, 66, 0.15); */
}
.goffyAisdeCardInfoN:hover {
  background-color: #e9e9f0;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
  color: #32259b;
}
.goffyAisdeCardInfo {
  background-color: #5d568c;
  border-radius: 3px;
  width: 94%;
  height: 100%;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  color: #ffffff;
  /* -webkit-box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
  box-shadow: 0 4px 16px rgba(48, 55, 66, 0.15); */
}

.goffyAisdeCardInfo:hover {
  background-color: #e9e9f0;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
  color: #32259b;
}
.goffyAisdeCard {
  width: 100%;
  height: 38px;
  padding: 7px;
  padding-bottom: 3px;
  padding-top: 2px;
}
.goffyAisdechapter {
  width: 100%;
  height: 86%;
}
.goffyAisdeTitle {
  font-size: 18px;
  text-align: left;
  color: #322a6f;
  padding-left: 15px;
  padding-top: 15px;
  font-weight: bold;
  font-family: unset;
  height: 35px;
}
.goffyBody {
  position: relative;
  /* background: #E4E9F7; */
  height: 100vh;
  left: 23.5%;
  width: calc(100% - 23.5%);
  transition: all 0.5s ease;
  background-color: #f7f7f7;
}
.goffyAisde {
  width: 22%;
  height: 100%;
  position: absolute;
  z-index: 2;
  /* left: 0; */
  background-color: #f1f1f1;
}
#goffyReader {
  border-radius: 3px;
  width: 97.5%;
  height: 92%;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
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
</style>
