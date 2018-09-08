import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Metrics.doubleMarginHorizontal
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.marginVertical
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backImage: {
    width: Metrics.images.small,
    height: Metrics.images.small,
    marginRight: Metrics.smallMargin
  },
  backText: {
    fontSize: Fonts.size.h6,
    color: Colors.text,
    fontWeight: 'bold'
  },
  logo: {
    width: Metrics.images.medium,
    height: Metrics.images.medium
  },
  sectionTitleContainer: {
    marginVertical: Metrics.smallMargin
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h1,
    color: Colors.sectionTitle
  },
  SectionSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Metrics.doubleBaseMargin
  },
  sectionSubtitle: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h4,
    color: Colors.sectionTitle
  }
})
