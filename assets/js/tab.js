jQuery(document).ready(function ($) {
  const $tab = $(".premium-tab");

  $tab.map((index, tab) => {
    let $tab = $(tab),

      $toggletabs = $tab.find(`.premium-tab-title`);
    $toggletabsVertical = $tab.find(`.premium-tab-title-vertical`);

    $togglecontent = $tab.find(`.premium-tab-content`);

    $toggletabs.map((index, active) => {
      let $active = $(active)


      $active.on("click", () => {
        for (let i = 0; i <= $toggletabs.length - 1; i++) {
          if (i == index) {
            if ($toggletabsVertical) {
              console.log("if if");

              $active.addClass("premium-tab-title-vertical-active");
              $($togglecontent[i]).addClass("premium-tab-content-vertical-active");
              $($toggletabs[i]).removeClass("premium-tab-title-active");
              $($togglecontent[i]).removeClass("premium-tab-content-active");
            } else {
              console.log("if else");
              $active.addClass("premium-tab-title-active");
              $($togglecontent[i]).addClass("premium-tab-content-active");
              $($toggletabs[i]).removeClass("premium-tab-title-vertical-active");
              $($togglecontent[i]).removeClass("premium-tab-content-vertical-active");
            }
          } else {
            if ($toggletabsVertical) {
              console.log("else if");
              $($toggletabs[i]).removeClass("premium-tab-title-vertical-active");
              $($togglecontent[i]).removeClass("premium-tab-content-vertical-active");
              $($toggletabs[i]).removeClass("premium-tab-title-active");
              $($togglecontent[i]).removeClass("premium-tab-content-active");
            } else {
              console.log("else else");
              $($toggletabs[i]).removeClass("premium-tab-title-active");
              $($togglecontent[i]).removeClass("premium-tab-content-active");
            }
          }
        }

      })
    })
  });
});