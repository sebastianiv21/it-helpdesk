import {
  Page,
  Document,
  View,
  Text,
  StyleSheet,
  Image,
  Font
} from '@react-pdf/renderer'
import logoinforme from "/images/logoinforme.png"
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
      fontSize: '25px',
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
      color: 'white',
      marginTop: '8'
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
      width: '550',
      height: '150',
      marginLeft: 20,
    },
    page: {
      fontFamily: 'Poppins',
      paddingBottom: '60',
      marginTop: '30'
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: '#004643',
    },
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
      <Page size='A4' style={styles.page} >
        <View  
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#c2e7c9',
            marginTop: '-40',
            marginBottom: -25
          }}>
            <View style={{flexDirection:'row', marginTop: -20}}>

            <Image
        src={logoinforme} style={{width: '200', marginLeft:'-50', marginTop: -5}}
      />

      <View>
      <Text
            style={{ color: '#004643', fontSize: '30px', fontWeight: 'bold', marginTop:'30', marginLeft: -60 }}
          >
            IT TECHNOLOGY
          </Text>
      <Text
            style={{
              color: '#004643',
              fontSize: '25px',
              marginLeft: -58,
              marginTop: -10
            }}
          >
            HelpDesk
          </Text>
      </View>
            </View>
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
            <Text style={{ color: 'white', fontSize: '13px',marginRight: '4'  }}> EMPRESA:</Text>
            <Text style={{ color: 'white', fontSize: '13px' }}>{empresa}</Text>
            <View style={{ flexDirection: 'row', marginLeft: '230' }}>
              <Text style={{ color: 'white', fontSize: '13px',marginTop: '2',marginRight: '4' }}>PERIODO:</Text>
              <Text style={{ color: 'white', fontSize: '13px', }}>
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
            <Text style={{ color: 'white', fontSize: '13px',marginRight: '4' }}> CLIENTE:</Text>
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
          <Text style={styles.text}> Informe de trazabilidad </Text>
        </View>
        <View style={styles.primera}>
          <View style={styles.carta}>
            <Text
              style={{
                fontSize: '12px',
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
              TOTAL
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
                fontSize: '12px',
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
        <View wrap={false}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '25'
          }}
        >
          <Text style={styles.text}> Grafico de categorias </Text>
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
                style={{ width: '80vw' }}
                src={grafica}
              />
            )}
          </View>
        </View>
        </View>
        <View wrap={false}>
        <View style={{marginTop:'30'}}>
        <Text
              style={styles.text}
            >
              Descripción del grafico
            </Text>

        </View>
        <View style={styles.descripcion}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: '15px',
                fontWeight: 'bold',
                color: '#004643',
                paddingTop:6
              }}
            >
              {descripcion}
            </Text>
          </View>
        </View>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
      </Page>
    </Document>
  )
}
export default DocuPDF
