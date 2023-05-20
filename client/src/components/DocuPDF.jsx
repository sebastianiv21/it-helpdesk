import{Page,Document, View, Text} from "@react-pdf/renderer";

const DocuPDF = ({ poema }) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <Document>
        <Page size="A4">
        <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>yaaaaa</Text>
    </View>
        </Page>
    </Document>
  );
};
export default DocuPDF;