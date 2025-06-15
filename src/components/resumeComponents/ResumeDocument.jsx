
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bold: {
    fontWeight: "bold",
  },
  listItem: {
    marginLeft: 10,
  },
});

const ResumeDocument = ({
  personalInfo,
  technicalSkills,
  workExperience,
  projects,
}) => {
  const {
    name,
    contact,
    email,
    gitUserName,
    linkedInUrl
  } = personalInfo;

  const {
    languages,
    frameworks,
    platforms,
  } = technicalSkills;

  const {
    WorkProjectTitleOne,
    workDescriptionOne,
    WorkProjectTitleTwo,
    workDescriptionTwo,
  } = workExperience;

  const {
    projectTitleOne,
    descriptionOne,
    projectTitleTwo,
    descriptionTwo,
  } = projects;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Personal Info */}
        <View>
          <Text>{name}</Text>
          <Text>📞 {contact} | 📧 {email}</Text>
          <Text>GitHub: {gitUserName} | LinkedIn: {linkedInUrl}</Text>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.heading}>Technical Skills</Text>
          <Text><Text style={styles.bold}>Languages:</Text> {languages}</Text>
          <Text><Text style={styles.bold}>Frameworks:</Text> {frameworks}</Text>
          <Text><Text style={styles.bold}>Platforms:</Text> {platforms}</Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.heading}>Work Experience</Text>
          <Text style={styles.bold}>{WorkProjectTitleOne}</Text>
          {workDescriptionOne.map((point, idx) => (
            <Text key={idx} style={styles.listItem}>• {point}</Text>
          ))}
          <Text style={[styles.bold, { marginTop: 5 }]}>{WorkProjectTitleTwo}</Text>
          {workDescriptionTwo.map((point, idx) => (
            <Text key={idx} style={styles.listItem}>• {point}</Text>
          ))}
        </View>

        {/* Page Break */}
        <View break />

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.heading}>Projects</Text>
          <Text style={styles.bold}>{projectTitleOne}</Text>
          <Text>{descriptionOne}</Text>
          <Text style={[styles.bold, { marginTop: 5 }]}>{projectTitleTwo}</Text>
          <Text>{descriptionTwo}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumeDocument;
