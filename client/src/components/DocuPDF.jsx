import {
  Page,
  Document,
  View,
  Text,
  StyleSheet,
  Image,
  Font
} from '@react-pdf/renderer'
import logoinforme from '/images/logoinforme.png'
const DocuPDF = ({ grafica, datos }) => {
  const {
    fechaInicio,
    fechaFinal,
    empresa,
    ticketsAbiertos,
    ticketsCerrados,
    tickets,
    categorias
  } = datos

  Font.register({
    family: 'Poppins',
    src: 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2'
  })

  const styles = StyleSheet.create({
    encabezado: {
      flexDirection: 'row',
      justifyContent:  'space-between',
      marginLeft: 10,
      marginRight: 10,
    },

    primera: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginLeft: 10,
      marginRight: 10,
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
      borderColor: 'white',
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
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor: '#c2e7c9',
      marginLeft: 10,
      marginRight: 10,
      textAlign: 'center',
    },
    tablaFila: {
      flexDirection: 'row',
      textAlign: 'center',
    },
    tablaColumna2: {
      width: 80,
      borderStyle: 'solid',
      borderColor: 'white',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    tablaColumna3: {
      width: 200,
      borderColor: 'white',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tablaCeldaHeader: {
      fontSize: 11,
      color: 'white',
      margin: 10,
      textAlign: 'center',
      borderColor: 'white'
    },
    anchoColumna2: {
      width: 80,
      borderStyle: 'solid',
      borderColor: 'white',
      borderBottomColor: 'white',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0
    },
    tablaCelda: {
      margin: 10,
      fontSize: 10,
      color: '#004643',
      textAlign: 'center'
    },
    descripcion: {
      display: 'flex',
      paddingTop: '5px',
      borderRadius: '5px',
      width: '550',
      height: '150',
      marginLeft: 20
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
      color: '#004643'
    }
  })

  const datosTabla = tickets?.map((ticket) => (
    <View key={ticket.id} style={styles.tablaFila}>
      <View
        style={{
          width: 200,
          borderStyle: 'solid',
          borderColor: 'white',
          borderBottomColor: 'white',
          borderWidth: 1,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          textAlign: 'center'
        }}
      >
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
  ))

  const datosCategoria = categorias?.map((categoria) => (
    <View key={categoria.name} style={styles.tablaFila}>
      <View
        style={{
          width: 200,
          borderStyle: 'solid',
          borderColor: 'white',
          borderWidth: 1,
          borderLeftWidth: 0,
          borderTopWidth: 0,
        }}
      >
        <Text style={{      marginTop:15,
      fontSize: 12,
      color: '#004643',
      textAlign: 'center',
      alignItems: 'center'}}>{categoria.nombre}</Text>
      </View>
      <View
        style={{
          width: 200,
          borderStyle: 'solid',
          borderColor: 'white',
          borderWidth: 1,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 1,
        }}
      >
        {categoria.subcategorias?.map((subcategoria) => (
          <View
            style={{
              width: 200,
              borderStyle: 'solid',
              borderColor: 'white',
              borderWidth: 0,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              textAlign: 'center',
            }}
          >
            <Text style={styles.tablaCelda}>{subcategoria.nombre}</Text>
          </View>
        ))}
      </View>
      <View
        style={{
          width: 200,
          borderStyle: 'solid',
          borderColor: 'white',
          borderWidth: 0,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 1  ,
          textAlign: 'center',
        }}
      >
        {categoria.subcategorias?.map((subcategoria) => (
          <View
          style={{
            width: 200,
            borderStyle: 'solid',
            borderColor: 'white',
            borderWidth: 0,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            textAlign: 'center',
          }}
          >
            <Text style={styles.tablaCelda}>{subcategoria.cantidad}</Text>
          </View>
        ))}
      </View>
    </View>
  ))

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#c2e7c9',
            marginTop: -20,
            marginBottom: -30,
            marginLeft: 10,
            marginRight: 10
          }}
        >
          <View style={{ flexDirection: 'row', marginTop: -20 }}>
            <Image
              src={logoinforme}
              style={{ width: '200', marginLeft: '-60', marginTop: -5 }}
            />
            <View>
              <Text
                style={{
                  color: '#004643',
                  fontSize: '30px',
                  fontWeight: 'bold',
                  marginTop: '30',
                  marginLeft: -60
                }}
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
            padding: '5',
            marginLeft: 10,
            marginRight: 10
          }}
        >
          <View style={styles.encabezado}>
            <View>
              <Text style={{ color: 'white', fontSize: '13px' }}>
                EMPRESA / CLIENTE:
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: '13px',
                  marginTop: '2',
                  marginRight: 80
                }}
              >
                PERIODO:
              </Text>
            </View>
          </View>
          <View style={styles.encabezado}>
            <View>
              <Text style={{ color: 'white', fontSize: '13px' }}>
                {empresa}
              </Text>
            </View>
            <View>
              <Text style={{ color: 'white', fontSize: '13px' }}>
                {fechaInicio} - {fechaFinal}
              </Text>
            </View>
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
          <Text style={styles.text}>INFORME DE TRAZABILIDAD</Text>
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
              {ticketsAbiertos + ticketsCerrados}{' '}
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
              {ticketsAbiertos}{' '}
            </Text>
          </View>
        </View>
        <View style={styles.tabla}>
          <View style={styles.tablaFila}>
            <View
              style={{
                width: 200,
                borderStyle: 'solid',
                borderColor: 'white',
                borderBottomColor: 'white',
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopWidth: 0
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: 'white',
                  marginTop: 15,
                  textAlign: 'center',
                  borderColor: 'white',
                  alignItems: 'center'
                }}
              >
                Titulo
              </Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text
                style={{
                  fontSize: 11,
                  color: 'white',
                  marginTop: 15,
                  textAlign: 'center',
                  borderColor: 'white',
                  alignItems: 'center'
                }}
              >
                Prioridad
              </Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text
                style={{
                  fontSize: 11,
                  color: 'white',
                  marginTop: 15,
                  textAlign: 'center',
                  borderColor: 'white',
                  alignItems: 'center'
                }}
              >
                Estado
              </Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text
                style={{
                  fontSize: 11,
                  color: 'white',
                  marginTop: 15,
                  textAlign: 'center',
                  borderColor: 'white',
                  alignItems: 'center'
                }}
              >
                Categoría
              </Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>Fecha de Creación</Text>
            </View>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>Fecha de Cierre</Text>
            </View>
          </View>
        </View>
        <View style={styles.tablados}> {datosTabla} </View>
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
            <Text style={styles.text}>GRAFICO DE CATEGORIAS</Text>
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
                <Image style={{ width: '80vw' }} src={grafica} />
              )}
            </View>
          </View>
        </View>
        <View>
          <View style={{ marginTop: '30' }}>
            <Text style={styles.text}>DETALLADO DE SUB CATEGORIAS</Text>
            <View style={styles.tabla}>
              <View style={styles.tablaFila}>
                <View style={styles.tablaColumna3}>
                  <Text style={styles.tablaCeldaHeader}>CATEGORIA</Text>
                </View>
                <View style={styles.tablaColumna3}>
                  <Text style={styles.tablaCeldaHeader}>SUB CATEGORIA</Text>
                </View>
                <View style={styles.tablaColumna3}>
                  <Text style={styles.tablaCeldaHeader}>CANT.TICKETS</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: 'table',
                borderStyle: 'solid',
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: '#c2e7c9',
                marginLeft: 10,
                marginRight: 10
              }}
            >
              {datosCategoria}
            </View>
          </View>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  )
}
export default DocuPDF
