# Çiceksepeti & Patika.dev React Bootcamp Graduation Project

E-commerce app with ReactJS. The all informations comes from an API. In the application, there are 8 pages: home, product details, product add, account, sign in, sign up, forget password and error 404. 

Live Demo: [İkinci el project](https://cicek-sepeti-project-celalcankurt.vercel.app/)

### Topics
- React js
- React Hooks
- React Router Dom
- React-redux
- Redux-thunk
- Node-sass
- React-dropzone
- React-paginate
- React-toastify
 
## Getting Started

### Clone repo

  git clone https://github.com/cllcnkrt/CicekSepeti_Project.git
  
###  Install NPM Packages
  yarn add
  
### Run
yarn start

## Pages

#### Register 
- Users can become a member from this page.
- Email and Password fields are required.
- The email must be valid and a password with a length of at least 8 and a maximum of 20 characters must be entered.
- If the process is successful, the user is redirected to the index page as a signed-in.
- If the process is unsuccessful, the user is shown an error message.
- When users who already have login try to come to this page, they are redirected to the index page before they can see this page.
![üye ol 1](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_1.png?token=ANONKVALMUWQSPD4RMDCMBTBQHXZO)

![üye ol 2](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_2.png?token=ANONKVCQETCOHID2ZYNNGX3BQHXZU)



![üye ol 3](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_3.png?token=ANONKVA5YCFREXADX7R5F3DBQHXZY)
![üye ol mobil](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/%C3%BCyeol_mobil.PNG?token=ANONKVGWU4KYVHXU6ZMQXETBQH26A)
#### Login

- Users can log in as a member from this page
- Email and Password fields are required.
-  The email must be valid and a password with a length of at least 8 and a maximum of 20 characters must be entered.
-  If the process is successful, the user is redirected to the index page as a signed-in.
- If the process is unsuccessful, the user is shown an error message.
- When users who already have login try to come to this page, they are redirected to the index page before they can see this page.


![giris 1](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_7.png?token=ANONKVFAXIZZQ5XM5MHQOQTBQHYKG)
![giris 2](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_8.png?token=ANONKVDGW3WIE5SOABIQDPDBQHYKM)

![giris mobil](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/girisyap_mobil.PNG?token=ANONKVEGVJBWRYNMARB5LALBQH23S)
#### Forget Password,
- E-mail is being entered, if it is not entered, an error is displayed.
- After entering the e-mail and clicking the send button, it is redirected to the login page.

![sifremi unuttum 1](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_31.png?token=ANONKVAWA4HRZXXJOKTGXV3BQHYPG)

![sifremi unuttum 2](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_32.png?token=ANONKVGGBGCOND23KYAF75LBQHYPU)
![sifremi unuttum mobil](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/sifreunuttum_mobil.PNG?token=ANONKVGXGIFMZ25BBOG7U2DBQH254)

#### Home
- Account and Add Product buttons appear if the user is authenticated,  user login button if they are not authenticated.
- When the Account button is clicked, it goes to Account page.
- When any category is clicked, the selected category is kept in the query.

![anasayfa](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_30.png?token=ANONKVHG2OBXXDBDKID6YT3BQHYWW)

![anasayfa 2](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_4.png?token=ANONKVGE3H7S5JU3BUUAA7DBQHYYI)
![anasayfa 3](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_5.png?token=ANONKVCKQ4BH3NXZR7DYWFTBQHYZ6)
![anasayfa 4](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_6.png?token=ANONKVESR3M3U7QHM4XRZRTBQHY2E)

![anasayfa mobil](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/home1_mobil.PNG?token=ANONKVAA6WJ452SRL2W4FDLBQH3BC)
![anasayfa mobil 2](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/home2_mobil.PNG?token=ANONKVH3WCM6P5ZFMUO7JI3BQH3DO)
#### Product Detail
- The Bid button appears or changes according to the isOfferable field in the data from the product.
- Clicking on the Bid button, a screen appears and ready-made offers can be made from there, or the user can enter an offer himself.
- When one of the ready-made percentile offers is selected, the corresponding value is calculated at the price and sent to the API side.
- If a user has bid on a product, when it comes to the detail of that product, the Withdraw Offer button appears instead of the Bid button. Clicking on it, the offer is withdrawn.
- The user can buy a product directly without making an offer. Clicking on the Buy button shows the corresponding screen.
- When the user purchases the product, the Buy and Bid buttons in the corresponding product are hidden. It seems that this product is Not on Sale in the form of an article. This article appears based on the value of the isSold field in the product data.

![ürün detay 1](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_9.png?token=ANONKVHM2YITPRZVB6MU6KLBQHY6G)
![ürün detay 2](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_10.png?token=ANONKVDMN3X46GXJGZFWN4TBQHZBK)

![ürün detay 2](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_11.png?token=ANONKVHMJNUH2MKC73W2RHTBQHZDE)
![ürün detay 3](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_12.png?token=ANONKVGKNPSEOCJK5J6T6STBQHZD4)


![ürün detay 4](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_13.png?token=ANONKVEYN3YWPN7VXRT6ES3BQHZFY)

![ürün detay 5](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_14.png?token=ANONKVC2MSQM2XPITCOO5E3BQHZF6)

![ürün detay 6](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_15.png?token=ANONKVB5JSM5NMAIA6JHMZ3BQHZGI)

![ürün detay 7](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_16.png?token=ANONKVAKSXXU4EJ5B4URQPDBQHZGO)
 ![ürün detay mobil](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/%C3%BCr%C3%BCn-detay_mobil.PNG?token=ANONKVBQSV33E4LLGABCY4LBQH3E4)
#### Account
- If the user is not logged in, it cannot view this page.
- Listing offers
- The received offers can be answered with the Confirm and Reject buttons.
- The purchase button appears when the bid is confirmed
- Clicking on the Buy button, as on the product detail page, the corresponding screen appears. Clicking on Buy updates the status of the product in the list of My offers.

![hesabım](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_17.png?token=ANONKVD3NAYFCASLOIJ7ECDBQHZN2)

![hesabım 2](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_18.png?token=ANONKVBGZHHOE6JA4M7ULPLBQHZOA)

![hesabım 3](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_19.png?token=ANONKVAV6MTGLMREE4G3KP3BQHZOI)
![hesabım 4](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_20.png?token=ANONKVFUQKEGIFWEDZHOJ2DBQHZOO)

![hesabım 5](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_21.png?token=ANONKVDAAHOKARR2LZ4IQX3BQHZOU)

![hesabım 6](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_22.png?token=ANONKVFH7XI4HXOAN3OY423BQHZO2)

![hesabım mobile 1](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/teklifald%C4%B1klar%C4%B1m_mobil.PNG?token=ANONKVBVPLYR7SQ6OMXFJ53BQH3FC)
![hesabım mobile](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/teklifverdiklerim_mobil.PNG?token=ANONKVEAEVGH2DVFCXOIV43BQH3FI)
#### Product Add
- If the user is not signed-in, it cannot view this page.
- The Product Name field has a maximum length of 100 characters and is a mandatory field.
- The description field has a maximum length of 500 characters and is a mandatory field.
- The Category field lists the categories pulled from the corresponding endpoint, and up to one category can be selected. This area is a mandatory one.
- The color field lists the colors taken from the corresponding endpoint, and up to one color can be selected. This area is a mandatory one.
- The brand field lists the brands withdrawn from the corresponding endpoint, and up to one brand can be selected. This area is a mandatory one.
- The Usage Status field lists the usage states that are pulled from the corresponding endpoint, and a maximum of one usage state can be selected. This area is a mandatory one.
- A maximum of one product image can be added from the Product Image field. The added product image can be deleted at any time. This area is a mandatory one. Only images can be added in png/jpg/jpeg format. A maximum of 400kb worth of images can be added.
- The price field is a number and mandatory field.
![ürün ekle](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_23.png?token=ANONKVG7JOCI6DSS45COJ4LBQH2BC)

![ürün ekle 2](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_24.png?token=ANONKVAS4ZASNRJDSV33AULBQH2BI)

![ürün ekle 3](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_25.png?token=ANONKVCFYI4AZYFKHGYLLZDBQH2BM)

![ürün ekle 4](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_26.png?token=ANONKVGFWPU6MBXLGNYLCSLBQH2BS)

![ürün ekle 4](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_27.png?token=ANONKVFXSBIIHPUPIIRGY5LBQH2BY)
![ürün ekle 5](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_28.png?token=ANONKVHL7TTTDKFMR4TZPS3BQH2CA)

![ürün ekle mobil](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/%C3%BCr%C3%BCnekle1_mobil.PNG?token=ANONKVFJLPC4YYE24JGX6FDBQH3FM)

![ürün ekle mobil 2](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/%C3%BCr%C3%BCnekle2_mobil.PNG?token=ANONKVB4D2J2UNO6QCNGTDTBQH3FS)

#### Error 404
- The page shown in incorrect link redirects.
![error 404](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/web/Screenshot_29.png?token=ANONKVFGMDYNYGFLWJIPBULBQHZ62)
![error 404 mobil](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/mobile/404error_mobil.PNG?token=ANONKVBCVTKX4MXLO4YABZLBQH3FW)

## Performances
#### Web
![web](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/performances/web_performance.PNG?token=ANONKVARNI6FTMWCPFO3BGLBQH2OQ)

#### Mobile
![mobil](https://raw.githubusercontent.com/cllcnkrt/CicekSepeti_Project/master/src/assets/performances/mobile_performance.PNG?token=ANONKVHKJ6OJY4PYRQTEJOTBQH2O2)
