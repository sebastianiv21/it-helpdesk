import {
  Page,
  Document,
  View,
  Text,
  StyleSheet,
  Image,
  Font
} from '@react-pdf/renderer'
const DocuPDF = ({ poema }) => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  const COL_ANCHO_1 = 10
  const COL_ANCHO_2 = 20
  Font.register({
    family: 'Poppins',
    src: 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2'
  })
  // Font.register({
  //   family: 'Roboto',
  //   src: 'https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxPKTU1Kg.ttf'
  // })
  const styles = StyleSheet.create({
    encabezado: {
      flexDirection: 'row'
    },

    primera: {
      flexDirection: 'row',
      alignSelf: 'center'
    },
    text: {
      color: '#004643',
      fontSize: '42px',
      margin: '5'
    },
    carta: {
      display: 'flex',
      flexDirecion: 'colum',
      alingItem: 'center',
      margin: '5px',
      border: '1px',
      padding: '10px',
      borderRadius: '10px',
      backgroundColor: '#c2e7c9',
      height: '70',
      width: '100',
      marginHorizontal: '15'
    },
    tabla: {
      display: 'table',
      width: 'auto',
      borderStyle: 'solid',
      borderColor: '#c2e7c9',
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      marginTop: 20,
      backgroundColor: '#004643',
      marginLeft: 10,
      marginRight: 10,
      textAlign: 'center'
    },
    tablados: {
      display: 'table',
      width: 'auto',
      borderStyle: 'solid',
      borderColor: '#c2e7c9',
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      backgroundColor: '#c2e7c9',
      marginLeft: 10,
      marginRight: 10,
      textAlign: 'center'
    },
    tablaFila: {
      flexDirection: 'row'
    },
    tablaColumna1: {
      width: 68,
      borderStyle: 'solid',
      borderColor: '#c2e7c9',
      borderBottomColor: '#c2e7c9',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    tablaColumna2: {
      width: 68,
      borderStyle: 'solid',
      borderColor: '#c2e7c9',
      borderBottomColor: '#c2e7c9',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    tablaCeldaHeader: {
      margin: 5,
      fontSize: 10,
      fontWeight: 200,
      color: 'white'
    },
    anchoColumna1: {
      width: 68,
      borderStyle: 'solid',
      borderColor: '#c2e7c9',
      borderBottomColor: '#c2e7c9',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    anchoColumna2: {
      width: 68,
      borderStyle: 'solid',
      borderColor: '#c2e7c9',
      borderBottomColor: '#c2e7c9',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    tablaCelda: {
      margin: 5,
      fontSize: 10,
      fontWeight: 200,
      color: '#004643'
    },
    descripcion: {
      display: 'flex',
      flexDirecion: 'colum',
      alingItem: 'center',
      margin: '5px',
      border: '1px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#c2e7c9',
      width: '250',
      height: '350'
    },
    page: {
      fontFamily: 'Poppins'
    }
  })
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#c2e7c9',
            paddingTop: '5'
          }}
        >
          <Text
            style={{ color: '#004643', fontSize: '30px', fontWeight: 'bold' }}
          >
            {' '}
            IT TECHNOLOGY
          </Text>
          <Text
            style={{
              color: '#004643',
              fontSize: '15px',
              paddingLeft: '4',
              paddingBottom: '4'
            }}
          >
            {' '}
            HelpDesk
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#004643',
            fontSize: '12px',
            padding: '5'
          }}
        >
          <View style={styles.encabezado}>
            <Text style={{ color: 'white', fontSize: '13px' }}> EMPRESA:</Text>
            <Text style={{ color: 'white', fontSize: '13px' }}>
              {' '}
              FUNDACION ALTO MAGDALENA
            </Text>
            <View style={{ flexDirection: 'row', marginLeft: '90' }}>
              <Text style={{ color: 'white', fontSize: '13px' }}>
                {' '}
                PERIODO:
              </Text>
              <Text style={{ color: 'white', fontSize: '13px' }}>
                {' '}
                20/05/2023 - 31/06/2023
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: '4',
              paddingBottom: '4'
            }}
          >
            <Text style={{ color: 'white', fontSize: '13px' }}> CLIENTE:</Text>
            <Text style={{ color: 'white', fontSize: '13px' }}>
              {' '}
              MIGUEL RUBIANO
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.text}> Tickets Generados</Text>
        </View>
        <View style={styles.primera}>
          <View style={styles.carta}>
            <Text
              style={{
                fontSize: '15px',
                fontWeight: 'bold',
                color: '#004643',
                textAlign: 'center'
              }}
            >
              Cerrados{' '}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: '25px',
                fontWeight: 'bold',
                color: '#004643',
                paddingTop: 5
              }}
            >
              5{' '}
            </Text>
          </View>
          <View style={styles.carta}>
            <Text
              style={{
                fontSize: '15px',
                fontWeight: 'bold',
                color: '#004643',
                textAlign: 'center'
              }}
            >
              Abiertos{' '}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: '25px',
                color: '#004643',
                fontWeight: 'bold',
                paddingTop: 5
              }}
            >
              5{' '}
            </Text>
          </View>
        </View>
        <View style={styles.tabla}>
          <View style={styles.tablaFila}>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>ID</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>Empresa</Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>Cliente</Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>Titulo</Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>Prioridad</Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>Estado</Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>Categoría</Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>Fecha de Creación</Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>Fecha de Cierre</Text>
            </View>
          </View>
        </View>
        <View style={styles.tablados}>
          <View style={styles.tablaFila}>
            <View style={styles.anchoColumna1}>
              <Text style={styles.tablaCelda}>lolete</Text>
            </View>
            <View style={styles.anchoColumna1}>
              <Text style={styles.tablaCelda}>lolete</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>lolete</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>lolete</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>lolete</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>lolete</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>lolete</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>lolete</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>lolete</Text>
            </View>
          </View>
        </View>

        <View></View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.text}> Categorias mas solicitadas</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '4'
          }}
        >
          <View style={styles.descripcion}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#004643'
              }}
            >
              Descripción{' '}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#004643',
                paddingTop: 30
              }}
            >
              ASDADSADDASDSADSDASDDASASASDASDADADASDASDSADADSADADASDADSASDSADASDA{' '}
            </Text>
          </View>
          <View style={styles.descripcion}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#004643'
              }}
            >
              Grafica{' '}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}
export default DocuPDF
