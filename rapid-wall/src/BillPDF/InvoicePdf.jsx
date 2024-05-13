// InvoicePdf.js

import React from 'react';
import { Page, Text, Document, StyleSheet, View, Font, Image } from '@react-pdf/renderer';
import img1 from "../assets/Picture1.jpg"
import img2 from "../assets/Picture2.jpg"

Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf' }, // Regular
    { src: 'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc9.ttf' }, // Bold
  ],
});


const styles = StyleSheet.create({
  boldText: {
    fontFamily: "Roboto",
    fontWeight: 900,
  },
  rightBorder: {
    borderRight: "1px solid black",
  },
  topBorder: {
    borderTop: "1px solid black",
  },
  leftBorder: {
    borderLeft: "1px solid black",
  },
  bottomBorder: {
    borderBottom: "1px solid black",
  },
  textSize: {
    fontSize:"10px",
  },
  flexBox: {
    display: 'flex',
    flexDirection: "row",
  },
  page: {
    width: "100%",
    height: "100%",

  },
  box: {
    border: "1px solid black",
    width: "96%",
    height: "auto",
    margin: "2% 2% 2% 2%",

  },
  content: {
    alignItems: "center"
  },
  title: {
    paddingTop: "5px",
    fontSize: "15px",
    color: "green",

    textAlign: "center",
  },

  header: {

    paddingBottom: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    // width: "100%", 
  },
  proforma: {

    paddingBottom: "5px",
    paddingTop: "5px",
    fontSize: "15px",

    textAlign: "center",
  },
  image1: {
    paddingTop: "4px",
    width: "100px",
    height: "40px",
  },
  image2: {
    paddingTop: "4px",
    // marginTop:"10px",
    width: "120px",
    height: "40px"
  },

  billTo: {
    fontSize: "15px",

    padding: "2px",
    width: "43%",
    height: "100px",

  },
  billText: {

    paddingTop: "10px",
    paddingLeft: "5px",
    fontWeight: "light",
  },
  otherDetails: {
    width: "57%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
  },
  leftWithoutBorder: {
    justifyContent: "space-around",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // textAlign:"center"
    width: "100%",
    height: "33px",
  },
  containerLeft: {
    justifyContent: "space-around",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // textAlign:"center"
    width: "100%",
    height: "33px",
  },
  invoiceNo: {

    fontSize: "12px",
    width: "150px",
    paddingTop: "10px",
    // paddingRight:"10px",
    marginLeft: "-46px",

    // align-items:"center",
    height: "100%",
    // height:"33px",
  },
  date: {
    fontSize: "12px",
    marginLeft: "-90px"
    // height:"33px",
  },
  dateFormatted: {
    fontSize: "12px",
    marginLeft: "-70px"

  },
  invoiceNoFirst: {

    fontSize: "12px",
    width: "150px",
    paddingTop: "10px",

    marginLeft: "-39px",
    height: '100%'
  },
  sno: {

    width: "40px",
    height: "25px",
    textAlign: "center",

    paddingTop: "4px",
  },
  productCode: {

    width: "80px",
    height: "25px",
    textAlign: "center",

    paddingTop: "4px",
  },
  productDesc: {
    
    width: "125px",
    height: "25px",
    textAlign: "center",
    
    paddingTop: "4px",
  },
  hsnCode: {
   
    width: "60px",
    height: "25px",
    textAlign: "center",
    
    paddingTop: "4px",
  },
  qty: {
    
    width: "50px",
    height: "25px",
    textAlign: "center",
    
    paddingTop: "4px",
  },
  uom: {
    
    width: "49px",


    height: "25px",
    textAlign: "center",
    
    paddingTop: "4px",
  },
  amt: {

    
    width: "65px",
    height: "25px",
    textAlign: "center",
 
    paddingTop: "4px",
  },


  productFlex: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },

  productSno: {
    
    width: "40px",
    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    
  },
  productCodeValue: {
    
    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    width: "80px",
    
  },
  productDescriptionValue: {
    
    height: "40px",

    paddingTop: "10px",
    paddingLeft: "3px",
    paddingRight: "3px",

    width: "125px",
   
  },
  productHSNcodeValue: {
    
    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    width: "60px",
    
  },
  productQty: {
    
    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    width: "50px",
    
  },
  productUom: {
    
    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    width: "49px",
    
  },
  productAmt: {

    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    width: "60px",
    
  },

  taxDetails: {
    
    textAlign: "center",
    paddingTop: "4px",
    
    
    width: "306px",
    height: "20px",

  },
  totalWithoutTax: {
   
    textAlign: "center",
    paddingTop: "4px",
    
   
    width: "200px",
    height: "20px",
  },
  totalValue: {
    
    textAlign: "center",
    paddingTop: "4px",
   
    width: "65px",
    height: "20px",
  },
  productGST: {
   
    textAlign: "center",
    paddingTop: "4px",

   
    width: "153px",
    height: "20px",
  },
  CGSTamt: {
   
    textAlign: "center",
    paddingTop: "4px",

    
    width: "200px",
    height: "20px",
  },
  CGSTvalue: {
    
    textAlign: "center",
    paddingTop: "4px",

   
    width: "65px",
    height: "20px",
  },
  individualGST: {
    
    textAlign: "center",
    paddingTop: "4px",

   
    width: "51px",
    height: "20px",
  },
  totalEmptyBox: {
    
    textAlign: "center",
    paddingTop: "4px",

    
    width: "306px",
    height: "20px",
  },
  finalTotalAttribute: {
    textAlign: "center",
    paddingTop: "4px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "200px",
    height: "20px",
  },
  finalTotalValue: {
    textAlign: "center",
    paddingTop: "4px",
    width: "65px",
    height: "20px",
  },
  amtInWordsTitle: {
    
    width: "25%",
    paddingLeft: "5px",
    paddingTop: "10px",
    
    paddingBottom: "10px",
  },
  amtInWordsValue: {
    
    paddingTop: "10px",
    paddingBottom: "10px",
  },


  details: {
    width: "70%",
    height: '200px',
    
    borderTop: "2px solid black",

    paddingLeft: "5px",
  },
  signature: {
    width: "40%",
    height: "200px",
    borderTop: "2px solid black",

  },
  bankName: {
    
    paddingTop: "15px",
  },
  branchName: {
    
    paddingTop: "7px",
    paddingBottom: "10px",
  },
  termsAndConditionsHeader: {
    
    paddingTop: "8px",
  },
  termsAndConditionsText: {
    
    paddingTop: "2px",
    paddingRight: "5px",
  },
  declarationHeader: {
    
    paddingTop: "15px",
  },
  rapidSolutionsText: {
    fontSize:"12px",
    textAlign: "center",
    paddingTop: "70px"
  },
  authorizedSignatory: {
    fontSize:"12px",
    paddingTop: "50px",
    textAlign: "center",
  },
});

const InvoicePdf = () => {
  const d = new Date();
  const date = d.getDate()
  const month = d.getMonth() + 1
  const year = d.getFullYear()

  const formatted = `${date}/${month}/${year}`;
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.box}>
          <View style={[styles.header, styles.bottomBorder]}>
            <View>
              <Image src={img1} style={styles.image1}></Image>
            </View>
            <View>
              <View style={styles.content}>
                <Text style={[styles.title, styles.boldText]}>RAPID SOLUTIONS</Text>
                <Text style={[styles.boldText, styles.textSize]}>171/B, Erode Road, Perundurai - 638 052,</Text>
                <Text style={[styles.boldText, styles.textSize]}>Cell : +91 98432 95942, E-mail : rapidsolutions.2k@gmail.com</Text>
                <Text style={[styles.boldText, styles.textSize]}>GST No. : 33EZLPK6351N1ZT</Text>
              </View>
            </View>
            <View>
              <Image src={img2} style={styles.image2}></Image>
            </View>
          </View>
          <View>
            <Text style={[styles.proforma, styles.bottomBorder, styles.boldText]}>Proforma Invoice</Text>
          </View>

          <View style={[styles.bottomBorder, styles.flexBox]}>
            <View style={[styles.billTo, styles.rightBorder, styles.boldText]}>
              <Text >Bill to:</Text>
              <Text style={[styles.billText, styles.textSize]}>
                M/s GECO Legend Enviro Tech,{"\n "}
                SF.No2/1B,Chettipalayam - Palladam Road,{"\n "}
                Coimbatore-641201, TamilNadu{"\n "}
                GSTIN/UIN : - 33AAQFG9689M1ZB{"\n "}
                Contact No. : 9842715501
              </Text>
            </View>
            <View style={styles.otherDetails}>
              <View style={[styles.containerLeft, styles.bottomBorder]}>
                <View >
                  <Text style={[styles.invoiceNoFirst, styles.rightBorder, styles.boldText]}>Invoice No : 027</Text>
                </View>
                <View >
                  <Text style={[styles.dateFormatted, styles.boldText]}>Date : {formatted}</Text>
                </View>
              </View>
              <View style={[styles.containerLeft, styles.bottomBorder]}>
                <View>
                  <Text style={[styles.invoiceNo, styles.rightBorder, styles.boldText]}>Customer PO No: 12345</Text>
                </View>
                <View>
                  <Text style={[styles.date, styles.boldText]}>Fright: Verbal</Text>
                </View>

              </View>
              <View style={styles.leftWithoutBorder}>
                <View ><Text style={[styles.invoiceNo, styles.rightBorder, styles.boldText]}>Dispatch Through :</Text></View>
                <View><Text style={[styles.date, styles.boldText]}>Party</Text></View>

              </View>
            </View>
          </View>

          <View style={styles.productFlex}>
            <Text style={[styles.sno, styles.rightBorder, styles.bottomBorder, styles.textSize, styles.boldText]}>S.No</Text>
            <Text style={[styles.productCode,styles.rightBorder, styles.bottomBorder, styles.textSize, styles.boldText]}>Product Code</Text>
            <Text style={[styles.productDesc,styles.rightBorder, styles.bottomBorder, styles.textSize, styles.boldText]}>Product Description</Text>
            <Text style={[styles.hsnCode,styles.rightBorder, styles.bottomBorder, styles.textSize, styles.boldText]}>HSN Code</Text>
            <Text style={[styles.qty,styles.rightBorder, styles.bottomBorder, styles.textSize, styles.boldText]}>QTY</Text>
            <Text style={[styles.uom,styles.rightBorder, styles.bottomBorder, styles.textSize, styles.boldText]}>UOM</Text>
            <Text style={[styles.qty,styles.rightBorder, styles.bottomBorder, styles.textSize, styles.boldText]}>Price</Text>
            <Text style={[styles.qty,styles.rightBorder, styles.bottomBorder, styles.textSize, styles.boldText]}>Tax Rate</Text>
            <Text style={[styles.amt,styles.bottomBorder,styles.textSize,styles.boldText]}>Amount</Text>
          </View>



          <View style={styles.productFlex}>
            <Text style={[styles.productSno,styles.rightBorder,styles.textSize]}>1</Text>
            <Text style={[styles.productCodeValue,styles.rightBorder,styles.textSize]}>RERW000003</Text>
            <Text style={[styles.productDescriptionValue,styles.rightBorder,styles.textSize]}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={[styles.productHSNcodeValue,styles.rightBorder,styles.textSize]}>6811.40.90</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>2.00</Text>
            <Text style={[styles.productUom,styles.rightBorder,styles.textSize]}>NOS</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>1661.12</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>IGST@18</Text>
            <Text style={[styles.productAmt,styles.textSize]}>3322.04</Text>
          </View>
          <View style={styles.productFlex}>
            <Text style={[styles.productSno,styles.rightBorder,styles.textSize]}>1</Text>
            <Text style={[styles.productCodeValue,styles.rightBorder,styles.textSize]}>RERW000003</Text>
            <Text style={[styles.productDescriptionValue,styles.rightBorder,styles.textSize]}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={[styles.productHSNcodeValue,styles.rightBorder,styles.textSize]}>6811.40.90</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>2.00</Text>
            <Text style={[styles.productUom,styles.rightBorder,styles.textSize]}>NOS</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>1661.12</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>IGST@18</Text>
            <Text style={[styles.productAmt,styles.textSize]}>3322.04</Text>
          </View>
          <View style={styles.productFlex}>
            <Text style={[styles.productSno,styles.rightBorder,styles.textSize]}>1</Text>
            <Text style={[styles.productCodeValue,styles.rightBorder,styles.textSize]}>RERW000003</Text>
            <Text style={[styles.productDescriptionValue,styles.rightBorder,styles.textSize]}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={[styles.productHSNcodeValue,styles.rightBorder,styles.textSize]}>6811.40.90</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>2.00</Text>
            <Text style={[styles.productUom,styles.rightBorder,styles.textSize]}>NOS</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>1661.12</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>IGST@18</Text>
            <Text style={[styles.productAmt,styles.textSize]}>3322.04</Text>
          </View>


          <View style={styles.productFlex}>
            <Text style={[styles.productSno,styles.rightBorder,styles.textSize]}>1</Text>
            <Text style={[styles.productCodeValue,styles.rightBorder,styles.textSize]}>RERW000003</Text>
            <Text style={[styles.productDescriptionValue,styles.rightBorder,styles.textSize]}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={[styles.productHSNcodeValue,styles.rightBorder,styles.textSize]}>6811.40.90</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>2.00</Text>
            <Text style={[styles.productUom,styles.rightBorder,styles.textSize]}>NOS</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>1661.12</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>IGST@18</Text>
            <Text style={[styles.productAmt,styles.textSize]}>3322.04</Text>
          </View>
          <View style={styles.productFlex}>
            <Text style={[styles.productSno,styles.rightBorder,styles.textSize]}>1</Text>
            <Text style={[styles.productCodeValue,styles.rightBorder,styles.textSize]}>RERW000003</Text>
            <Text style={[styles.productDescriptionValue,styles.rightBorder,styles.textSize]}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={[styles.productHSNcodeValue,styles.rightBorder,styles.textSize]}>6811.40.90</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>2.00</Text>
            <Text style={[styles.productUom,styles.rightBorder,styles.textSize]}>NOS</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>1661.12</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>IGST@18</Text>
            <Text style={[styles.productAmt,styles.textSize]}>3322.04</Text>
          </View>
          <View style={styles.productFlex}>
            <Text style={[styles.productSno,styles.rightBorder,styles.textSize]}>1</Text>
            <Text style={[styles.productCodeValue,styles.rightBorder,styles.textSize]}>RERW000003</Text>
            <Text style={[styles.productDescriptionValue,styles.rightBorder,styles.textSize]}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={[styles.productHSNcodeValue,styles.rightBorder,styles.textSize]}>6811.40.90</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>2.00</Text>
            <Text style={[styles.productUom,styles.rightBorder,styles.textSize]}>NOS</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>1661.12</Text>
            <Text style={[styles.productQty,styles.rightBorder,styles.textSize]}>IGST@18</Text>
            <Text style={[styles.productAmt,styles.textSize]}>3322.04</Text>
          </View>


          <View style={styles.productFlex}>
            <Text style={[styles.taxDetails,styles.textSize,styles.rightBorder,styles.topBorder,styles.bottomBorder,styles.boldText]}>Tax Details</Text>
            <Text style={[styles.totalWithoutTax,styles.textSize,styles.rightBorder,styles.topBorder,styles.bottomBorder,styles.boldText]}>TOTAL</Text>
            <Text style={[styles.totalValue,styles.textSize,styles.topBorder,styles.bottomBorder,styles.boldText]}>7135.61</Text>
          </View>

          <View style={styles.productFlex}>
            <Text style={[styles.productGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}>GST 12%</Text>
            <Text style={[styles.productGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}>GST 18%</Text>
            <Text style={[styles.CGSTamt,styles.textSize,styles.rightBorder,styles.bottomBorder]}>CGST AMOUNT</Text>
            <Text style={[styles.CGSTvalue,styles.textSize,styles.bottomBorder]}>642</Text>
          </View>

          <View style={styles.productFlex}>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}>IGST</Text>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}>CGST</Text>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}>SGST</Text>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}>IGST</Text>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}>CGST</Text>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}>SGST</Text>
            <Text style={[styles.CGSTamt,styles.textSize,styles.rightBorder,styles.bottomBorder]}>SGST AMOUNT</Text>
            <Text style={[styles.CGSTvalue,styles.textSize,styles.bottomBorder]}>642</Text>
          </View>


          <View style={styles.productFlex}>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}></Text>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}></Text>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}></Text>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}></Text>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}>642.0</Text>
            <Text style={[styles.individualGST,styles.textSize,styles.rightBorder,styles.bottomBorder,styles.boldText]}>642.0</Text>
            <Text style={[styles.CGSTamt,styles.textSize,styles.rightBorder,styles.bottomBorder]}>ROUND OFF</Text>
            <Text style={[styles.CGSTvalue,styles.textSize,styles.bottomBorder]}>-0.02</Text>
          </View>


          <View style={styles.productFlex}>
            <Text style={[styles.totalEmptyBox,styles.textSize,styles.rightBorder,styles.bottomBorder]}></Text>
            <Text style={[styles.finalTotalAttribute,styles.textSize,styles.boldText]}>TOTAL</Text>
            <Text style={[styles.finalTotalValue,styles.textSize,styles.bottomBorder,styles.boldText]}>8,420.00</Text>
          </View>


          <View style={styles.productFlex}>
            <Text style={[styles.amtInWordsTitle,styles.textSize,styles.boldText]}>Amount in Words :</Text>
            <Text style={[styles.amtInWordsValue,styles.textSize]}>Rupees Eight Thousand Four Hundred and Twenty Only.</Text>
          </View>


          <View style={styles.productFlex}>
            <View style={[styles.details,styles.rightBorder]}>
              <Text style={[styles.bankName,styles.textSize,styles.boldText]}>Bank          :  HDFC BANK LTD, Current Account No. : 50200085788331</Text>
              <Text style={[styles.branchName,styles.textSize,styles.boldText]}>Branch       : Perundurai Branch, Erode. IFS Code : HDFC 0009299</Text>
              <Text style={[styles.termsAndConditionsHeader,styles.textSize,styles.boldText]}>Terms & Conditions :</Text>
              <Text style={[styles.termsAndConditionsText,styles.textSize]}>Subject to Perundurai Jurisdiction only. Interest will be charged @24% p.a. if the payment of this bill is not paid within due date.</Text>
              <Text style={[styles.termsAndConditionsHeader,styles.textSize,styles.boldText]}>Damage : </Text>
              <Text style={[styles.termsAndConditionsText,styles.textSize]}>Occurrences of damages up to 5% is to be expected and tolerated. Chipping of edges not to be considered as damage since the panels are light in weight.</Text>
              <Text style={[styles.declarationHeader,styles.textSize,styles.boldText]}>Declaration :</Text>
              <Text style={[styles.termsAndConditionsText,styles.textSize]}>We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.</Text>
            </View>
            <View style={styles.signature}>
              <Text style={[styles.rapidSolutionsText,styles.boldText]}>For Rapid Solutions</Text>
              <Text style={[styles.authorizedSignatory,styles.boldText]}>Authorised Signatory</Text>
            </View>
          </View>


        </View>
      </Page>
    </Document>
  );
};

export default InvoicePdf;
