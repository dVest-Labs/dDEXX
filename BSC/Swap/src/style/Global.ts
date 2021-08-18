import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
  .icon_sidebar
  {
    margin-right: 20px;
  }
.jpBRLF
{
  color: #848282;
font-weight: 700;
font-size: 16px;
}
#join-pool-button,#join-pool-button:hover
{
  border-radius:18px !important;
  opacity:1 !important;
}
#swap-page button.htxlrH:hover,#join-pool-button:hover {
  background-color:#1a1c21;
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
  opacity:1 !important;
  color:#fff !important;
}
nav button[aria-label="Toggle menu"] {
  background-color: transparent !important;
  border-radius:0px !important;
  height:32px !important;
}

#pair:hover
{
  background-color:transparent !important;
}
.evXgBv .desktop-icon,.desktop-icon
{
  width:156px !important;
  // margin-top:10px;
}
#pool-nav-link,#swap-nav-link,button,a
{
  box-shadow: 0px 0px 0px 0px rgba(14,14,44,0.4) inset !important;
}
.div_padding
{
  border-bottom: 1px solid #E9EAEB;
padding: 24px;
}
.heading_pool
{
  font-size: 20px;
  font-weight: 600;
line-height: 1.1;
margin-bottom:5px !important;
}
.desc_pool
{
 
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  font-weight: 700;
}
nav div[title="Bunny"]
{
  display:none;
}
.menulink div
{
  font-size:16px !important;
  color:#848282 !important;
  text-transform:initial;
  font-weight: 700;
  font-family: Sofia_Pro_Semi_Bold !important;
}
div[role="button"] a {
  // text-transform: uppercase;
  font-size: 15px;
  font-family: Sofia_Pro_Semi_Bold !important;
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
nav button[aria-label="Toggle menu"] svg {
  fill: #00d2d4 !important;
}
#swap-page svg
{
  fill:#00d2d4;
  color:#00d2d4;
}
.bor_radius>div,.bor_radius a
{
  border-radius:32px;
}
.bor_radius div a
{
  // background-color:transparent;
}
.bor_radius div a:hover,.bor_radius div a:hover:not(:disabled):not(.button--disabled):not(:active)
{
  background-color: #00d2d4 !important;
  color:#fff !important;
  opacity:1 !important;
}
.bor_radius div a(:active),.bor_radius div a:active
{
  background-color: #00d2d4 !important;
  color:#fff !important;
}
.bor_radius div a:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled),
.bor_radius div a[variant="subtle"] {
  opacity: 1;
  background-color: #00d2d4 !important;
}
#swap-page button,#pool-page-button button
{
  background-image: linear-gradient(90deg, #00d2d4  61%, #00d2d4  94%, #00d2d4);
  border: 1px solid #00d2d4  !important;
  box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
  border-radius:18px !important;
}
#swap-page button:hover,#pool-page-button button:hover
{
  background-image: linear-gradient(45deg, #1a1c21  -6%, #1a1c21  46%, #1a1c21  69%);
  border: 1px solid #1a1c21  !important;
  box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
  border-radius:18px !important;
}
#swap-page button[title="Settings"],
#swap-page button[title="Recent transactions"],
.btn_icon_center
{
  background:none !important;
  border:none !important;
}
.arrow_color_grey .open-currency-select-button svg,
#add-liquidity-input-tokena svg,#add-liquidity-input-tokenb svg
{
  color:#ccc !important;
  fill: #ccc !important;
}
#swap-currency-input,#swap-currency-input>div,
#swap-currency-output,#swap-currency-output>div,.radius_card,
#add-liquidity-input-tokena,#add-liquidity-input-tokena>div,
#add-liquidity-input-tokenb,#add-liquidity-input-tokenb>div
{
  border-radius:20px;
}
div[data-reach-dialog-overlay]
{
z-index:21 !important;
}
.card_bg_1
{
 border-radius:32px;

}
.btn_yellow
{
  background-image: linear-gradient(90deg, #00d2d4  61%, #00d2d4  94%, #00d2d4);
border: 1px solid #00d2d4  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:32px !important;
color:#fff !important;
}
.btn_yellow:hover
{
  background-image: linear-gradient(45deg, #1a1c21  -6%, #1a1c21  46%, #1a1c21  69%);
border: 1px solid #1a1c21  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:32px !important;
}
// .slippage_btn
// {
//   background-color: #e9eaeb !important;
// }
#token-search-input
{
  border:1px solid #ccc;
}
button[aria-label="Close the dialog"]:hover:not(:disabled):not(.button--disabled):not(:active)
 {
 opacity:1 !important;
}
button:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
  opacity:1 !important;
}
.input_color button,#swap-button
{
  color:#fff !important;
}
button div#pair
{
margin-left:16px !important;
}
#swap-page .price_icon svg {
  fill: #24262e !important;
  color: #24262e !important;
}
#swap-page .price_icon svg:hover
{
  fill: #00d2d4 !important;
  color: #00d2d4 !important;
}
#swap-page button.open-currency-select-button,
#pool-page-button .open-currency-select-button
{
background:none !important;
border:none !important;
}

#swap-page button.open-currency-select-button:hover,
#pool-page-button .open-currency-select-button:hover
{
background:none !important;
border:none !important;
}
.inpt_tran
{
  background-color:transparent !important;
  border: 2px solid #00d2d4;
    border-radius: 16px;
    color: #00d2d4;
}
.inpt_tran svg

{
  color: #00d2d4;
  fill: #00d2d4;
}
.menulink svg
{
  fill:#767576 !important;
  color:#767576 !important;
  height:20px;
  width:30px;
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
