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
  page: {
    width: "100%",
    height: "100%",

  },
  box: {
    border: "1px solid black",
    width: "96%",
    height: "96%",
    margin: "2% 2% 2% 2%",

  },
  content: {
    alignItems: "center"
  },
  title: {
    paddingTop: "5px",
    fontSize: "15px",
    color: "green",
    fontFamily: 'Roboto',
    fontWeight: "bold", // Bold weight
    textAlign: "center", // Align the text horizontally at the center
  },
  text: {
    fontSize: "10px",
    fontWeight: 800,
    fontFamily: 'Roboto',

    // textAlign: "center"
  },
  header: {
    borderBottom: "1px solid black",
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    // width: "100%", 
  },
  proforma: {
    borderBottom: "1px solid black",
    paddingBottom: "5px",
    paddingTop: "5px",
    fontSize: "15px",
    fontFamily: 'Roboto',
    fontWeight: 700, // Bold weight
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
  billDetails: {
    display: "flex",
    // borderRight: "1px solid black",
    flexDirection: "row",
    borderBottom: "1px solid black"
  },
  billTo: {
    fontSize: "15px",
    fontWeight: "normal",
    padding: "2px",
    width: "43%",
    height: "100px",
    borderRight: "1px solid black",
  },
  billText: {
    fontSize: "10px",
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
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // textAlign:"center"
    width: "100%",
    height: "33px",
  },
  invoiceNo: {
    borderRight: '1px solid black',
    fontSize: "12px",
    width: "150px",
    paddingTop: "10px",
    // paddingRight:"10px",
    marginLeft: "-45px",

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
    borderRight: '1px solid black',
    fontSize: "12px",
    width: "150px",
    paddingTop: "10px",

    marginLeft: "-39px",
    height: '100%'
  },
  sno: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "40px",
    height: "25px",
    textAlign: "center",
    fontSize: "10px",
    paddingTop: "4px",
  },
  productCode: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "80px",
    height: "25px",
    textAlign: "center",
    fontSize: "10px",
    paddingTop: "4px",
  },
  productDesc: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "125px",
    height: "25px",
    textAlign: "center",
    fontSize: "10px",
    paddingTop: "4px",
  },
  hsnCode: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "60px",
    height: "25px",
    textAlign: "center",
    fontSize: "10px",
    paddingTop: "4px",
  },
  qty: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "50px",
    height: "25px",
    textAlign: "center",
    fontSize: "10px",
    paddingTop: "4px",
  },
  uom: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "49px",


    height: "25px",
    textAlign: "center",
    fontSize: "10px",
    paddingTop: "4px",
  },
  amt: {

    borderBottom: "1px solid black",
    width: "65px",
    height: "25px",
    textAlign: "center",
    fontSize: "10px",
    paddingTop: "4px",
  },


  productFlex: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },

  productSno: {
    borderRight: "1px solid black",
    width: "40px",
    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    fontSize: "10px",
  },
  productCodeValue: {
    borderRight: "1px solid black",
    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    width: "80px",
    fontSize: "10px",
  },
  productDescriptionValue: {
    borderRight: "1px solid black",
    height: "40px",

    paddingTop: "10px",
    paddingLeft: "3px",
    paddingRight: "3px",

    width: "125px",
    fontSize: "10px",
  },
  productHSNcodeValue: {
    borderRight: "1px solid black",
    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    width: "60px",
    fontSize: "10px",
  },
  productQty: {
    borderRight: "1px solid black",
    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    width: "50px",
    fontSize: "10px",
  },
  productUom: {
    borderRight: "1px solid black",
    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    width: "49px",
    fontSize: "10px",
  },
  productAmt: {

    height: "40px",
    textAlign: "center",
    paddingTop: "15px",
    width: "60px",
    fontSize: "10px",
  },

  taxDetails: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",
    // padding:"20px",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "306px",
    height: "20px",

  },
  totalWithoutTax: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",
    // padding:"20px",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "200px",
    height: "20px",
  },
  totalValue: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",
    // padding:"20px",
    borderTop: "1px solid black",

    borderBottom: "1px solid black",
    width: "65px",
    height: "20px",
  },
  productGST: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",

    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "153px",
    height: "20px",
  },
  CGSTamt: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",

    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "200px",
    height: "20px",
  },
  CGSTvalue: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",

    borderBottom: "1px solid black",
    width: "65px",
    height: "20px",
  },
  individualGST: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",

    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "51px",
    height: "20px",
  },
  totalEmptyBox: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",

    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "306px",
    height: "20px",
  },
  finalTotalAttribute: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",
    // padding:"20px",
    
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    width: "200px",
    height: "20px",
  },
  finalTotalValue: {
    fontSize: "10px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",
    
    
    borderBottom: "1px solid black",
    width: "65px",
    height: "20px",
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
          <View style={styles.header}>
            <View>
              <Image src={img1} style={styles.image1}></Image>
            </View>
            <View>
              <View style={styles.content}>
                <Text style={styles.title}>RAPID SOLUTIONS</Text>
                <Text style={styles.text}>171/B, Erode Road, Perundurai - 638 052,</Text>
                <Text style={styles.text}>Cell : +91 98432 95942, E-mail : rapidsolutions.2k@gmail.com</Text>
                <Text style={styles.text}>GST No. : 33EZLPK6351N1ZT</Text>
              </View>
            </View>
            <View>
              <Image src={img2} style={styles.image2}></Image>
            </View>
          </View>
          <View>
            <Text style={styles.proforma}>Proforma Invoice</Text>
          </View>

          <View style={styles.billDetails}>
            <View style={styles.billTo}>
              <Text >Bill to:</Text>
              <Text style={styles.billText}>
                M/s GECO Legend Enviro Tech,{"\n "}
                SF.No2/1B,Chettipalayam - Palladam Road,{"\n "}
                Coimbatore-641201, TamilNadu{"\n "}
                GSTIN/UIN : - 33AAQFG9689M1ZB{"\n "}
                Contact No. : 9842715501
              </Text>
            </View>
            <View style={styles.otherDetails}>
              <View style={styles.containerLeft}>
                <View >
                  <Text style={styles.invoiceNoFirst}>Invoice No : 027</Text>
                </View>
                <View >
                  <Text style={styles.dateFormatted}>Date : {formatted}</Text>
                </View>
              </View>
              <View style={styles.containerLeft}>
                <View>
                  <Text style={styles.invoiceNo}>Customer PO No: 12345</Text>
                </View>
                <View>
                  <Text style={styles.date}>Fright: Verbal</Text>
                </View>

              </View>
              <View style={styles.leftWithoutBorder}>
                <View ><Text style={styles.invoiceNo}>Dispatch Through :</Text></View>
                <View><Text style={styles.date}>Party</Text></View>

              </View>
            </View>
          </View>

          <View style={styles.productFlex}>
            <Text style={styles.sno}>S.No</Text>
            <Text style={styles.productCode}>Product Code</Text>
            <Text style={styles.productDesc}>Product Description</Text>
            <Text style={styles.hsnCode}>HSN Code</Text>
            <Text style={styles.qty}>QTY</Text>
            <Text style={styles.uom}>UOM</Text>
            <Text style={styles.qty}>Price</Text>
            <Text style={styles.qty}>Tax Rate</Text>
            <Text style={styles.amt}>Amount</Text>
          </View>



          <View style={styles.productFlex}>
            <Text style={styles.productSno}>1</Text>
            <Text style={styles.productCodeValue}>RERW000003</Text>
            <Text style={styles.productDescriptionValue}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={styles.productHSNcodeValue}>6811.40.90</Text>
            <Text style={styles.productQty}>2.00</Text>
            <Text style={styles.productUom}>NOS</Text>
            <Text style={styles.productQty}>1661.12</Text>
            <Text style={styles.productQty}>IGST@18</Text>
            <Text style={styles.productAmt}>3322.04</Text>
          </View>
          <View style={styles.productFlex}>
            <Text style={styles.productSno}>1</Text>
            <Text style={styles.productCodeValue}>RERW000003</Text>
            <Text style={styles.productDescriptionValue}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={styles.productHSNcodeValue}>6811.40.90</Text>
            <Text style={styles.productQty}>2.00</Text>
            <Text style={styles.productUom}>NOS</Text>
            <Text style={styles.productQty}>1661.12</Text>
            <Text style={styles.productQty}>IGST@18</Text>
            <Text style={styles.productAmt}>3322.04</Text>
          </View>
          <View style={styles.productFlex}>
            <Text style={styles.productSno}>1</Text>
            <Text style={styles.productCodeValue}>RERW000003</Text>
            <Text style={styles.productDescriptionValue}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={styles.productHSNcodeValue}>6811.40.90</Text>
            <Text style={styles.productQty}>2.00</Text>
            <Text style={styles.productUom}>NOS</Text>
            <Text style={styles.productQty}>1661.12</Text>
            <Text style={styles.productQty}>IGST@18</Text>
            <Text style={styles.productAmt}>3322.04</Text>
          </View>

          <View style={styles.productFlex}>
            <Text style={styles.productSno}>1</Text>
            <Text style={styles.productCodeValue}>RERW000003</Text>
            <Text style={styles.productDescriptionValue}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={styles.productHSNcodeValue}>6811.40.90</Text>
            <Text style={styles.productQty}>2.00</Text>
            <Text style={styles.productUom}>NOS</Text>
            <Text style={styles.productQty}>1661.12</Text>
            <Text style={styles.productQty}>IGST@18</Text>
            <Text style={styles.productAmt}>3322.04</Text>
          </View>
          <View style={styles.productFlex}>
            <Text style={styles.productSno}>1</Text>
            <Text style={styles.productCodeValue}>RERW000003</Text>
            <Text style={styles.productDescriptionValue}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={styles.productHSNcodeValue}>6811.40.90</Text>
            <Text style={styles.productQty}>2.00</Text>
            <Text style={styles.productUom}>NOS</Text>
            <Text style={styles.productQty}>1661.12</Text>
            <Text style={styles.productQty}>IGST@18</Text>
            <Text style={styles.productAmt}>3322.04</Text>
          </View>
          <View style={styles.productFlex}>
            <Text style={styles.productSno}>1</Text>
            <Text style={styles.productCodeValue}>RERW000003</Text>
            <Text style={styles.productDescriptionValue}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={styles.productHSNcodeValue}>6811.40.90</Text>
            <Text style={styles.productQty}>2.00</Text>
            <Text style={styles.productUom}>NOS</Text>
            <Text style={styles.productQty}>1661.12</Text>
            <Text style={styles.productQty}>IGST@18</Text>
            <Text style={styles.productAmt}>3322.04</Text>
          </View>
          <View style={styles.productFlex}>
            <Text style={styles.productSno}>1</Text>
            <Text style={styles.productCodeValue}>RERW000003</Text>
            <Text style={styles.productDescriptionValue}>Renacon Panel (SE) 75mm X 600mm X 3000mm</Text>
            <Text style={styles.productHSNcodeValue}>6811.40.90</Text>
            <Text style={styles.productQty}>2.00</Text>
            <Text style={styles.productUom}>NOS</Text>
            <Text style={styles.productQty}>1661.12</Text>
            <Text style={styles.productQty}>IGST@18</Text>
            <Text style={styles.productAmt}>3322.04</Text>
          </View>


          <View style={styles.productFlex}>
            <Text style={styles.taxDetails}>Tax Details</Text>
            <Text style={styles.totalWithoutTax}>TOTAL</Text>
            <Text style={styles.totalValue}>7135.61</Text>
          </View>

          <View style={styles.productFlex}>
            <Text style={styles.productGST}>GST 12%</Text>
            <Text style={styles.productGST}>GST 18%</Text>
            <Text style={styles.CGSTamt}>CGST AMOUNT</Text>
            <Text style={styles.CGSTvalue}>642</Text>
          </View>

          <View style={styles.productFlex}>
            <Text style={styles.individualGST}>IGST</Text>
            <Text style={styles.individualGST}>CGST</Text>
            <Text style={styles.individualGST}>SGST</Text>
            <Text style={styles.individualGST}>IGST</Text>
            <Text style={styles.individualGST}>CGST</Text>
            <Text style={styles.individualGST}>SGST</Text>
            <Text style={styles.CGSTamt}>SGST AMOUNT</Text>
            <Text style={styles.CGSTvalue}>642</Text>
          </View>


          <View style={styles.productFlex}>
            <Text style={styles.individualGST}></Text>
            <Text style={styles.individualGST}></Text>
            <Text style={styles.individualGST}></Text>
            <Text style={styles.individualGST}></Text>
            <Text style={styles.individualGST}>642.0</Text>
            <Text style={styles.individualGST}>642.0</Text>
            <Text style={styles.CGSTamt}>ROUND OFF</Text>
            <Text style={styles.CGSTvalue}>-0.02</Text>
          </View>


          <View style={styles.productFlex}>
            <Text style={styles.totalEmptyBox}></Text>
            <Text style={styles.finalTotalAttribute}>TOTAL</Text>
            <Text style={styles.finalTotalValue}>8,420.00</Text>
          </View>

        </View>
      </Page>
    </Document>
  );
};

export default InvoicePdf;
