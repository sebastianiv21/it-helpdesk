import {
  Page,
  Document,
  View,
  Text,
  StyleSheet,
  Image,
  Font
} from '@react-pdf/renderer'

const DocuPDF = ({ grafica, datos }) => {
  const {
    fechaInicio,
    fechaFinal,
    empresa,
    cliente,
    ticketsAbiertos,
    ticketsCerrados,
    tickets,
    categorias
  } = datos

const descripcion =categorias?.map((categoria) => (
`Categoría ${categoria.nombre} = ${categoria.cantidad}
subcategoría
 ${categoria.subcategorias?.map((subcategoria) => (
  `${subcategoria.nombre}=${subcategoria.cantidad}\n`
 ))}\n`

))

// categoria hardware = 28
//   sub categoria 
//     Escaner=9
//     Impresora=8
//     Monitor=1


 

  Font.register({
    family: 'Poppins',
    src: 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2'
  })

  const styles = StyleSheet.create({
    encabezado: {
      flexDirection: 'row'
    },

    primera: {
      flexDirection: 'row',
      alignSelf: 'center',
    },
    text: {
      color: '#004643',
      fontSize: '35px',
      textAlign: 'center'
    },
    carta: {
      display: 'flex',
      flexDirecion: 'colum',
      alingItem: 'center',
      margin: '25px',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#c2e7c9',
      height: '70',
      width: '100',
      marginHorizontal: '15'
    },
    cartatotal: {
      display: 'flex',
      flexDirecion: 'colum',
      alingItem: 'center',
      margin: '5px',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#004643',
      height: '90',
      width: '110',
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
      marginTop: 10,
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
      paddingTop: '5px',
      borderRadius: '5px',
      backgroundColor: '#c2e7c9',
      width: '550',
      height: '150',
      marginLeft: 20,
    },
    page: {
      fontFamily: 'Poppins'
    }
  })

  const datosTabla = tickets?.map((ticket) => (
    <View key={ticket.id} style={styles.tablaFila}>
            <View style={styles.anchoColumna1}>
              <Text style={styles.tablaCelda}>{ticket.id}</Text>
            </View>
            <View style={styles.anchoColumna1}>
              <Text style={styles.tablaCelda}>{ticket.empresa}</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>{ticket.cliente}</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>{ticket.titulo}</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>{ticket.prioridad}</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>{ticket.estado}</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>{ticket.categoria}</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>{ticket.fechaCreacion}</Text>
            </View>
            <View style={styles.anchoColumna2}>
              <Text style={styles.tablaCelda}>{ticket.fechaCierre}</Text>
            </View>
          </View> 
  ) ) 

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
            <Text style={{ color: 'white', fontSize: '13px' }}>{empresa}</Text>
            <View style={{ flexDirection: 'row', marginLeft: '90' }}>
              <Text style={{ color: 'white', fontSize: '13px' }}>PERIODO:</Text>
              <Text style={{ color: 'white', fontSize: '13px' }}>
                {fechaInicio} - {fechaFinal}
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
              {cliente}
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
          <Text style={styles.text}> Trazabilidad </Text>
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
              CERRADOS
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
              {ticketsCerrados}
            </Text>
          </View>
          <View style={styles.cartatotal}>
            <Text
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center'
              }}
            >
              TOTALES
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: '30px',
                color: 'white',
                fontWeight: 'bold',
                paddingTop: 5
              }}
            >
              {ticketsAbiertos+ticketsCerrados}
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
              ABIERTOS
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
              {ticketsAbiertos}
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
         {datosTabla}
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
          <Text style={styles.text}> Categorias </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '4'
          }}
        >
          <View>
            {Boolean(grafica) && (
              <Image
                style={{ width: '200', height: '200', paddingTop: 15 }}
                src={grafica}
              />
            )}
          </View>
        </View>
        <View>
        <Text
              style={styles.text}
            >
              DESCRIPCION
            </Text>

        </View>
        <View style={styles.descripcion}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: '15px',
                fontWeight: 'bold',
                color: '#004643',
                paddingTop:2
              }}
            >
              {descripcion}
            </Text>
          </View>
      </Page>
    </Document>
  )
}
export default DocuPDF
