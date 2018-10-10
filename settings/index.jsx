function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">App Settings</Text>}>
        <Text>Settings Coming Soon...</Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
