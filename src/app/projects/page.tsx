'use client'

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 sm:px-12 pt-32 pb-16">
      <h1 className="text-4xl font-bold mb-6">Tech Stack & Projects</h1>
      <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Automation & Testing Tools</h2>
      <p className="text-gray-400 mb-4">
        Selenium, Playwright, TestNG, GTUI, JMeter, BlazeMeter, Postman, API Testing
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-400">DevOps & CI/CD</h2>
      <p className="text-gray-400 mb-4">
        Jenkins, TeamCity, Maven, Gradle, Git, Bitbucket, Jira
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Cloud & Platforms</h2>
      <p className="text-gray-400 mb-4">
        Guidewire Cloud, Insurance Suite: PolicyCenter, BillingCenter, ClaimCenter, ContactManager
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Programming & Reporting</h2>
      <p className="text-gray-400 mb-4">
        Java, C#, JavaScript, PHP, SQL, PowerShell, R, SSRS, Power BI, Splunk
      </p>
    </section>
  )
}
