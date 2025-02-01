// var clicked = false;
// var imported_signature = []
// const MAXCOUNT = 10;
//
// async function transactionButton(mode = "") {
//     if (clicked == true) {
//         return false
//     } else {
//         let data;
//         if (mode == "ascii") {
//                 const fontsize = $(".asciidiv").width() /134;
//                 $(".on_chain_ascii").css("font-size", fontsize.toString() + "px");
//                 $(".on_chain_ascii").css("letter-spacing", "0.3em");
//                 data =  $("#test_ascii").text(); // 'utf8'로 인코딩 설정
//
//             } else  {
//                 $(".on_chain_ascii").css("letter-spacing", "0");
//                 $(".on_chain_ascii").css("line-height", "100%");
//                 $(".on_chain_ascii").css("white-space", "pre-wrap");
//                 $(".on_chain_ascii").css("font-size", "1rem");
//                 $(".on_chain_ascii").css("text-align", "left");
//
//                  data =  $("#test_txt").text(); // 'utf8'로 인코딩 설정
//             }
//
//             $(".on_chain_ascii").text(data);
//             $('.x_btn').css('display', 'flex');
//             $('.sol_scan').css('display', 'flex');
//
//
//             $(".transaction_input_check").css("display", "flex");
//         $(".before_check").css("display", "none");
//             $(".after_check").css("display", "flex");
//             clicked = false;
//
//     }
// }
//
// async function transactionButton_in_result() {
//     if (clicked == true) {
//         return false
//     } else {
//            const fontsize = $(".asciidiv").width() /134;
//             $(".on_chain_ascii").css("font-size", fontsize.toString() + "px");
//             const data =  $("#test_ascii").text(); // 'utf8'로 인코딩 설정
//            $(".on_chain_ascii").text(data);
//
//
//             $('.x_btn').css('display', 'flex');
//             $('.sol_scan').css('display', 'flex');
//         $(".before_check").css("display", "none");
//             $(".on_chain_ascii").css('display', 'flex');
//             $(".inputdiv").css("display", "flex");
//             clicked = false;
//
//     }
// }
//
//
//
// async function handleTransactionClick(mode="") {
//     if (clicked == true) return;
//     else {
//         clicked = true;
//         $(".on_chain_ascii").text("");
//         $(".text_div").css("display", "none");
//         $(".image_div").css("display", "none");
//         $('.x_btn').css('display', 'none');
//         $('.sol_scan').css('display', 'none');
// let data;
//         if (mode = "ascii") {
//             $(".image_div").css("display", "block");
//             const fontsize = $(".image_div").width() / 134;
//             $(".on_chain_ascii").css("font-size", fontsize.toString() + "px");
//
//             data =  $("#test_ascii").text(); // 'utf8'로 인코딩 설정
//
//             $(".on_chain_ascii").text(data);
//
//         } else  {
//             $(".text_div").css("display", "block");
//             data =  $("#test_txt").text(); // 'utf8'로 인코딩 설정
//             $(".on_chain_text").text(data);
//         }
//         $('.x_btn').css('display', 'flex');
//         $('.sol_scan').css('display', 'flex');
//
//         const twitterIntentUrl = createTwitterIntent(_post_contant);
//         $(".x_btn").off("click").on("click", function () {
//             window.open(twitterIntentUrl, '_blank');
//         });
//
//         clicked = false;
//     }
// }