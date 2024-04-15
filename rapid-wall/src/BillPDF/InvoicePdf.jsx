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
    width: "90%",
    height: "90%",
    margin: "5% auto 20%",

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
    paddingTop: "8px",
    width: "100px",
    height: "50px",
  },
  image2: {
    paddingTop: "8px",
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
    width: "50%",
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
    width: "50%",
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
    width: "140px",
    paddingTop: "10px",
    // paddingRight:"10px",
    marginLeft: "-35px",

    // align-items:"center",
    height: "100%",
    // height:"33px",
  },
  date: {
    fontSize: "12px",
    marginLeft: "-75px"
    // height:"33px",
  },
});

const InvoicePdf = () => {
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
                  <Text style={styles.invoiceNo}>Invoice No : 027</Text>
                </View>
                <View >
                  <Text style={styles.date}>Date : 14/7/23</Text>
                </View>
              </View>
              <View style={styles.containerLeft}>
                <View>
                  <Text style={styles.invoiceNo}>Customer PO No:</Text>
                </View>
                <View>
                  <Text style={styles.date}>Verbal</Text>
                </View>

              </View>
              <View style={styles.leftWithoutBorder}>
                <View ><Text style={styles.invoiceNo}>Freight :</Text></View>
                <View><Text style={styles.date}>Party</Text></View>

              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePdf;
