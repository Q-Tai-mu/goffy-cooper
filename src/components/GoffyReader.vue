<template>
  <div id="goffyReader">
    <div class="goffyAisde">
      <div class="goffyAisdeTitle">
        <span>近战氪金法师</span>
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
                  @click="changeView(item.id)"
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
          class="marker"
          tomeid="2430163"
          chapterid="66324239"
          data-sa-d='{"page_module":"readPage","click_name":"bookmark","book_id":"1119704"}'
        ></div>
        <div class="title">
          <div class="iconbox">
            <em class=""></em>
          </div>
          <div class="title_txtbox">第1章 初临异世</div>
        </div>
        <div class="bookinfo">
          作者：<a
            style="color: #2a2a2a; text-decoration: none"
            href="http://home.zongheng.com/show/userInfo/16121361.html"
            >道生喵</a
          >&nbsp;&nbsp;|&nbsp;&nbsp;字数：<span>3379</span>&nbsp;&nbsp;|&nbsp;&nbsp;更新时间：<span
            >2021-05-28 18:56:14</span
          >
        </div>
        <div class="reader_line"></div>
        <div class="content NeworldscroE" itemprop="acticleBody">
          <p>天空之中悬着一轮血月。</p>
          <p>身边一堆篝火将灭未灭。</p>
          <p>远处似乎是一望无际的旷野。</p>
          <p class="">
            <span class="con_txt"
              >罗勇从梦中醒来，就发现自己在一个破败的营地里面，周围一个人都没有，冷风阵阵，像是要把人给吹傻了似的……</span
            ><span class="r_count">1<i></i></span>
          </p>
          <p>这特么是个什么情况？</p>
          <p>自己不就是表白失败，一个人过了个十八岁的生日吗？</p>
          <p>不就是吃蛋糕的时候补了个番，看了一会小电影吗？</p>
          <p>怎么一觉醒来，就跑到这鸟不拉屎的地方来了？</p>
          <p>难道是吹蜡烛的时候许错愿了？</p>
          <p>
            <span class="con_txt"
              >或者，这只是一个梦境，就是真实得有些过分。</span
            ><span class="r_count">1<i></i></span>
          </p>
          <p>沙沙沙沙……沙沙沙沙……</p>
          <p>
            有什么东西爬过低矮的围栏，是一个球状生物，在血月的光辉之下闪耀着斑斓的色彩。
          </p>
          <p>借着篝火的微光，罗勇看出那是一只蜘蛛，个头足有西瓜那么大。</p>
          <p>环顾四周，除了几块即将燃尽的木头，连一块像样的砖头都没有。</p>
          <p>这到底是什么地方啊？</p>
          <p>罗勇全身上下翻了翻，啥也没有。</p>
          <p>
            钱包、手机、身份证，还有他暗恋了很久的女孩子的照片，全都没有带在身上。
          </p>
          <p>
            四处一划拉，只在篝火旁边划拉到一根前半端烧红了的铁棍，勉强能够当作武器。
          </p>
          <p>噗！</p>
          <p>
            <span class="con_txt"
              >铁棍并不锋利，却一下子扎进了蜘蛛的身体，深深的刺了进去！</span
            ><span class="r_count">1<i></i></span>
          </p>
          <p>
            与此同时，手心里传来一阵钻心的疼痛，罗勇松开了铁棍，右手已经被烫得血肉模糊。
          </p>
          <p>而他的脑海里也多了一些信息。</p>
          <p>姓名:罗勇</p>
          <p>职业:伪装者</p>
          <p>武器:伪装之刃</p>
          <p>“什么情况啊？”</p>
          <p>罗勇莫名想到了著名的一刀99999+的螃蟹怪。</p>
          <p>然而眼前的情况来不及让他想太多，夜色里传来一片沙沙声。</p>
          <p>
            远处亮起星星点点五颜六色的光点，数不尽的蜘蛛大军潮水一般涌了过来！
          </p>
          <p>卧靠！！</p>
          <p>
            <span class="con_txt"
              >罗勇心中闪过一个念头，觉得自己要凉，转身就要逃跑。</span
            ><span class="r_count">1<i></i></span>
          </p>
          <p>
            然而，此刻他双腿僵直，根本迈不动步，强行挣扎了几下，直接一个跟头栽倒在地，啃了一嘴的泥。
          </p>
          <p>完了！</p>
          <p>自己这条小命要喂蜘蛛了！</p>
          <p>想到这里，罗勇顿时一阵绝望。</p>
          <p>然而，看着面前的即将熄灭的篝火，他的心里又涌起了深深的不甘！</p>
          <p>
            想我罗勇，以后要成为律师，为人民伸张正义的大好青年，怎么能就这么死了？！
          </p>
          <p>要追的女孩还没有追到！！！</p>
          <p>“我到底是喝没喝啊，怎么会遇到这样的情况？”</p>
          <p>罗勇念叨了一句，就决定不跑了。</p>
          <p>这个时候逃跑就等于找死！</p>
          <p>
            普通蜘蛛的速度就非常快，换成眼前的这些蜘蛛，只怕没跑几步就被追上了，到时候绝对会死的很惨！
          </p>
          <p>
            这时候，最前面的蜘蛛已经爬过了围栏，个头比刚才那只更大，颜色也更鲜艳。
          </p>
          <p>罗勇僵立在那里，一动不动，暗想死就死了，不如赌一次！</p>
          <p>如果这是一个梦，说不定就像某个电影一样，在梦里死了就会醒过来。</p>
          <p>如果不是梦，反正也跑不掉！</p>
          <p>不就是蜘蛛吗，干他妈的，杀一只就不亏，杀两只就赚一只！</p>
          <p>
            说是自欺欺人也好，自我催眠也好，罗勇就那么站着，面对着一眼望不到边的蜘蛛大军，有一种置之死地而后生的豪气。
          </p>
          <p>不得不说，失恋中的男孩子最勇敢了，啥事都敢做。</p>
          <p>“杀！”</p>
          <p>罗勇再一次握住了刚才捡到的铁棍，用力的砸向一只色彩斑斓的蜘蛛。</p>
          <p>噗！</p>
          <p>绿色的液体溅了出来，一只蜘蛛被罗勇一棍打死。</p>
          <p>与此同时，几只同样大小的蜘蛛在他身边经过。</p>
          <p>
            最惊险的是，一只蜘蛛爬上了他的腿，一直向上爬，贴着他的脸爬过，停在他的头顶！
          </p>
          <p>
            那一刻，罗勇全身的寒毛都竖了起来，感觉自己的呼吸停了，心脏都不跳了！
          </p>
          <p>
            好在很快这只蜘蛛就爬了下去，融入蜘蛛大军之中，罗勇这才长长的松了口气。
          </p>
          <p>这夜不知道有多长，血色的月亮一直挂在天空，位置一点也没有变化。</p>
          <p>
            蜘蛛大军仿佛无穷无尽，大大小小的蜘蛛混合在一起，大的有一间房子那么大，小的有西瓜那么大，密密麻麻。
          </p>
          <p>
            <span class="con_txt"
              >除了色彩斑斓的那些，还有单一颜色的品种，有纯黑色的，也有银白色的，但是并不多见。</span
            ><span class="r_count">1<i></i></span>
          </p>
          <p>罗勇站得累了，内心也有些麻木，而他紧握着的铁棍，已经不再烫手。</p>
          <p>右手的烫伤竟然也在不知不觉中缓缓的愈合了。</p>
          <p>
            仔细一看，这个铁棍跟之前有些不一样了，似乎变长了一些，不轻也不重，用起来还算称手。
          </p>
          <p>“好吧，以后就叫伪装之刃……不过既然是伪装之刃，怎么能用真名呢？”</p>
          <p>
            不管心里怎么想，眼见不远处有一只蜘蛛径直向自己爬了过来，看样子又要一路爬上自己的头顶。
          </p>
          <p>特么的，你就不会绕一下吗？！</p>
          <p>罗勇一抖手，伪装之刃甩了出去！</p>
          <p>噗！</p>
          <p>
            这下比第一次更干脆，那只蜘蛛直接被钉在地上，挣扎了几下，绿色的液体流了出来，很快就不动了。
          </p>
          <p>罗勇在蜘蛛大军之中缓缓的移动，捡起伪装之刃，看看没啥变化。</p>
          <p>“它们看不见我？或者说，察觉不到我的存在？”</p>
          <p>
            罗勇等了一会，见一只个头比较大的彩色蜘蛛经过身边，把手里的铁棍一甩，正好打在关节处，花花绿绿的液体流出来。
          </p>
          <p>这只蜘蛛也毫无意外的躺平了。</p>
          <p>
            “好像还挺好玩的。”罗勇充分发挥乐观主义精神，利用自己的优势，不停的走位杀怪，杀了几十只大小蜘蛛之后，信息栏更新了。
          </p>
          <p>姓名:罗勇</p>
          <p>职业:伪装者</p>
          <p>武器:伪装之刃</p>
          <p>等级:1</p>
          <p>“1级了？”</p>
          <p>
            罗勇认真的想了想，貌似这是一个刷级游戏，而且自己好像不小心卡了个BUG，这么好的机会如果不好好珍惜，绝对天打雷劈！
          </p>
          <p>想到这里，罗勇把伪装之刃扔的更欢乐了。</p>
          <p>
            不一会功夫，罗勇又升了一级，伪装之刃彻底变形，看起来就是一截削尖了的木棍。
          </p>
          <p>应该是自动开启了伪装。</p>
          <p>“这么快就2级了？好，继续！”</p>
          <p>“我扎，我扎，我扎扎扎！”</p>
          <p>“我刺，我刺，我刺刺刺！”</p>
          <p>不远处，又有一只蜘蛛直愣愣的向罗勇爬了过来。</p>
          <p>“我擦，又来？”</p>
          <p>罗勇用力一掷，木棍唰的一下子刺中了一只通体蜡黄的蜘蛛。</p>
          <p>
            罗勇缓步走过去，拔出木棍，冲着远处一只蜘蛛比划了几下，全力扔了出去！
          </p>
          <p>“哇，扔这么远！”</p>
          <p>
            只顾着刷怪了，罗勇没有发现自己的力量比以前增强了一些，全力一掷之下，木棍命中目标之后，贯穿了一只半人高的彩色蜘蛛，又飞出去好远，落入一片低矮的树丛之中。
          </p>
          <p>树丛里全是粗细差不多，长长短短的木棍。</p>
          <p>“我特么……”罗勇简直无语了，这样也可以的么？</p>
          <p>这伪装之刃，伪装的连自己都认不出来了。</p>
          <p>罗勇蹲在一片木棍中间，一个一个的掂量着。</p>
          <p>“这个不是，太轻了！”</p>
          <p>“这个……也不是，太重了！”</p>
          <p>“这个不是，不是，还不是……这个……”</p>
          <p>唰唰唰！</p>
          <p>每扔出去一根木棍，就穿杀一只蜘蛛。</p>
          <p>
            直到随手扔出一根木棍之后，罗勇停下，走到刚刚穿杀的一只蜘蛛附近，拔出木棍。
          </p>
          <p>“差点又弄丢……这回可不能随便乱扔了。”</p>
          <p>
            又刷了些怪，罗勇瞄准了一只一人多高的巨型蜘蛛怪，蓄力之后，把伪装之刃狠狠的扔了出去！
          </p>
          <p>噗！</p>
          <p>
            绿色的液体流出，巨型蜘蛛怪被罗勇从头部穿杀，几乎没有反抗，直接趴下不动了。
          </p>
          <p>
            附近的蜘蛛怪一阵大乱，上蹿下跳的，吓了罗勇一跳，连忙自我催眠，保持一动不动，过了好一阵，更大的蜘蛛怪从这里经过，其它大小蜘蛛才安静下来，继续行进。
          </p>
          <p>
            罗勇收回伪装之刃，发现又有些变化，木棍变得越来越长，握在手里很有点三尺青锋的感觉，想找个什么东西狠狠的敲打几下。
          </p>
          <p>信息栏再次更新。</p>
          <p>罗勇3级了。</p>
          <p>
            荒野之中，蜘蛛肆虐，一轮血月横空，也不知道什么时候才能等到天亮。
          </p>
          <p>破败的营地已经彻底被摧毁，唯一的一堆篝火也早就熄灭。</p>
          <p>
            罗勇离开了这里，跟着蜘蛛大军一路行进，期间不停的击杀身边经过的大小蜘蛛怪。
          </p>
          <p>
            感觉杀了没有一千也有八百了，可是罗勇的等级依旧停留在3级，没有一丁点升级的意思。
          </p>
          <p>“什么情况，是经验条太长了，还是低级的蜘蛛怪已经不给经验了？”</p>
          <p>
            思索了很久，罗勇对着不远处像一间房子那么大的蜘蛛怪比划了半天，没敢下手。
          </p>
          <p>
            这种级别的蜘蛛怪，连一人粗的大树都能撞断，就别指望自己手里的小木棍了。
          </p>
          <p>
            万一惹怒了它，一顿横冲直撞，现场说不定乱成什么样呢，凭自己的小体格，剐蹭一点都得受伤，运气不好就一命呜呼了……
          </p>
          <p>勇气很重要，自知之明也很重要。</p>
          <p>既然出场自带吉利服，不苟到最后怎么行？</p>
          <p>“还要走多久啊？！”</p>
          <p>
            没有东西吃，也没有水喝，罗勇有些挥不动手里的棍子了，远远的看见前面的蜘蛛好像停下了，周围的蜘蛛怪也都不再行进，更远的地方隐隐约约有火把的亮光。
          </p>
          <p>前面似乎是一处人类营地！</p>
          <p>轰隆！</p>
          <p>地面忽然震动了几下，紧接着传来一片欢呼声。</p>
          <p>罗勇强压下心中的激动，依旧缓步向前走去……</p>
          <p>“特么的，望山跑死马，还有多远啊啊啊啊！”</p>
          <p>
            又走了很久，罗勇的眼前终于出现了人类营地，在营地外面横七竖八的躺平了一片大小蜘蛛怪，有几只蜘蛛怪幻化出了人形，上身如同女人一样，长发披肩，两条胳膊可以使用武器，下半截身体依旧是蜘蛛，八条腿一条也不少。
          </p>
          <p>
            许许多多的蜘蛛怪就在营地外围数丈之外安静的趴着，有些比较活跃，不停的窜来窜去，只是再不敢越雷池一步。
          </p>
          <p>
            欢呼过后，营地里陷入了短暂的平静，很多人趁着这个机会开始休息，也有人继续坚守阵地，与对面的蜘蛛怪对峙着。
          </p>
          <p>很快，蜘蛛怪开始撤退，来时如潮涌，去时如潮退。</p>
          <p>
            罗勇停下脚步，稍微休息了一会，从一棵树后面走了出来，向营地走去。
          </p>
          <p>嗖！</p>
          <p>
            在距离营地还有一段距离的时候，有破空之声传来，一支羽箭钉在罗勇面前。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goffyReader",
  data() {
    return {
      confirm: "1",
      ChapterColumn: [
        { name: "第1章节：xxxxx", id: "1" },
        { name: "第2章节：xxxxx", id: "2" },
        { name: "第3章节：xxxxx", id: "3" },
        { name: "第4章节：xxxxx", id: "4" },
        { name: "第5章节：xxxxx", id: "5" },
        { name: "第6章节：xxxxx", id: "6" },
        { name: "第7章节：xxxxx", id: "7" },
        { name: "第8章节：xxxxx", id: "8" },
        { name: "第9章节：xxxxx", id: "9" },
        { name: "第10章节：xxxxx", id: "10" },
        { name: "第11章节：xxxxx", id: "11" },
        { name: "第12章节：xxxxx", id: "12" },
        { name: "第13章节：xxxxx", id: "13" },
        { name: "第14章节：xxxxx", id: "14" },
        { name: "第15章节：xxxxx", id: "15" },
        { name: "第16章节：xxxxx", id: "16" },
        { name: "第17章节：xxxxx", id: "17" },
        { name: "第18章节：xxxxx", id: "18" },
        { name: "第19章节：xxxxx", id: "19" },
        { name: "第20章节：xxxxx", id: "20" },
      ],
    };
  },
  methods: {
    changeView(e) {
      this.confirm = e;
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
