import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  contentContainer: {
    paddingBottom: Metrics.section
  },
  largeContainer: {
    paddingHorizontal: Metrics.marginHorizontal + Metrics.smallMargin
  },
  shortContainer: {
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
    fontSize: Fonts.size.h2,
    color: Colors.sectionTitle,
    paddingHorizontal: Metrics.marginHorizontal,
    marginTop: Metrics.doubleSection,
    marginBottom: Metrics.smallMargin
  },
  SectionSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: Metrics.doubleBaseMargin,
    marginTop: -10,
    marginBottom: Metrics.smallMargin
  },
  sectionSubtitle: {
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.h5,
    color: Colors.sectionTitle
  }
})
