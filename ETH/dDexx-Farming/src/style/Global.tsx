import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
 
// * {
//   font-family: 'Roboto', sans-serif;
//   }
@font-face {
  font-family: HVD_Comic_Serif_Pro;
  src: url(./fonts/HVD_Comic_Serif_Pro.otf);
}
@font-face {
  font-family: Sofia_Pro_Regular;
  src: url(./fonts/Sofia_Pro_Regular.otf);
}
@font-face {
  font-family: Sofia_Pro_Semi_Bold;
  src: url(./fonts/Sofia_Pro_Semi_Bold.otf);
}
* {
  font-family: Sofia_Pro_Regular;
}
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  // *::-webkit-scrollbar {
  //   width: 5px;
  // }
  // *::-webkit-scrollbar-thumb {
  //   background: #ff841a;
  //   border-radius: 0px;
  // }
  .hvd_comic_serif {
    // font-family: HVD_Comic_Serif_Pro;
    font-family: Sofia_Pro_Semi_Bold !important;
    font-weight: 400;
  }
  .dash_subheading {
    font-size: 20px;
  }
  .white_box {    
    box-shadow: -4px 5px 10px 2px rgb(0 0 0 / 20%);
  }
  .vision_card_panel {
    max-width: 600px;
    margin: 10px auto 0;
  }
  .menulink  div {
    font-size: 18px;
    font-family: Sofia_Pro_Semi_Bold !important;
    text-transform: initial;
  }
  div[role="button"] a {
    // text-transform: uppercase;
    font-size: 15px;
    font-family: Sofia_Pro_Semi_Bold !important;
  }
  button div {
    font-family: Sofia_Pro_Semi_Bold !important;
    font-weight: 400 !important;
    font-size: 18px !important;
    // color: #ccc !important;
  }
  button {
    font-family: Sofia_Pro_Semi_Bold !important;
    font-weight: 400 !important;
  }
  .dash_heading_1
  {
    font-weight: 600;
    font-size:2rem;
    margin-bottom:20px;
  }
  .orange_head
  {
    font-size:2.5rem;
    font-weight:600;
  }
  .card_farms_head {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 20px;
    color: rgb(243, 132, 30);
}
.menulink div
{
  font-size:16px !important;
  color:#848282 !important;
  text-transform:initial;
  font-weight: 700;
}
.menulink img
{
  max-width:18px !important;
  min-width:18px !important;
}
.menulink svg
{
  // margin-right: 16px;
}
.icon_sidebar
{
  margin-right: 20px;
}
.white_box {
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%) !important;
}
.card_3_tiele
{
  color: rgb(144, 150, 152);
font-size: 24px;
font-weight: 700;
}
.card_3_subtiele
{
  font-size: 24px;
font-weight: 700;
}
.btn_yellow,.card_radius button.btn_yellow
{
  background-image: linear-gradient(90deg, #00d2d4  61%, #00d2d4  94%, #00d2d4);
border: 1px solid #00d2d4  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:18px !important;
}
.btn_yellow:hover,.card_radius button.btn_yellow:hover
{
  background-image: linear-gradient(45deg, #1a1c21  -6%, #1a1c21  46%, #1a1c21  69%);
border: 1px solid #1a1c21  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:18px !important;
}
button
{
  box-shadow: 0 0 0 0px #00d2d4 !important;
}
.or_h
{
  color: rgb(243, 132, 30);
}
button div
{
  // color: rgb(144,150,152) !important;
  font-size: 16px !important;
font-weight: 600 !important;
line-height: 1.5 !important;
margin-right: 16px !important;
}
nav button {
  background-color: #00d2d4 !important;
  border-radius:32px !important;
  color:#fff !important;
}
nav button:hover {
  background-color: #1a1c21 !important;
  border-radius:32px !important;
  color:#fff !important;
}
nav button[aria-label="Toggle menu"] {
  background-color: transparent !important;
  border-radius:0px !important;
}
nav button[aria-label="Toggle menu"] svg
{
  fill:#00d2d4 !important;
}
.card_radius,.white_box
{
  border-radius:32px !important;
}
.lable_color Label,.lable_color div,.label_color
{
  color:#00d2d4 !important;
}
.tab_radius>div>div,.tab_radius div,.tab_radius div a,.card_radius button,.bor_rad div
{
  border-radius:32px !important;
}
.tab_radius div a:hover,.tab_radius div a:hover:not(:disabled):not(.button--disabled):not(:active)
{
  background-color: #00d2d4 !important;
  color:#fff !important;
}
button[aria-label="Close the dialog"]:hover:not(:disabled):not(.button--disabled):not(:active)
 {
  background-color: transparent !important;
  border-color: currentColor;
}
.btn_not_found
{
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);

}
.btn_not_found:hover
{
  background-image: linear-gradient(45deg, #24262e -6%, #24262e 46%, #24262e 69%);
border: 1px solid #24262e !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:32px !important;
}
.menulink svg
{
  fill:#767576 !important;
  color:#767576 !important;
  height:20px;
  width:30px;
}
.menulink div[role="button"] a
{
  text-transform:initial !important;
}
.green_txt_d
{
  color:#00d2d4;
}
.dash_heading_sm_1
{
  font-size:20px;
  line-height:30px;
}
.grid_100
{
  grid-column: span 12 !important;
}
.imgfull div
{
  height: 400px !important;
  max-width: 100% !important;
  max-height: 400px !important;
  width: 100% !important;
}
.card_trans_bg
{
  background: transparent;
padding: 0px;
box-shadow: 0px 0px 0px 0px rgba(25,19,38,0.1),0px 0px 0px rgba(25,19,38,0.05) !important;
}
.card_trans_bg div
{
padding: 0px !important;

}
@media only screen and (max-width:767px)
{
  .card_trans_bg
  {
    display: none !important;
  }
}
a[aria-label="Telegram"], a[aria-label="Twitter"]
{
  margin-right:5px !important;
}
a[aria-label="Discord"]
{
  margin-right:0px !important;

}
a[aria-label="Telegram"]
{
  margin-left:5px;
}

`

export default GlobalStyle
