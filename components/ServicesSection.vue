<!-- components/ServicesSection.vue -->
<template>
    <section class="section services-section">
        <div class="container">
            <h2 class="section-title center-align">Our Services</h2>
            <h3 class="center-align">Creative. Strategic. Systematic.</h3>

            <div class="row">
                <!-- Service 1 -->
                <div class="col s12 m4">
                    <div class="card service-card">
                        <div class="card-content">
                            <span class="card-title">🔹 Creative & Content Services</span>
                            <p>Visuals that capture attention — and convert.</p>
                            <ul>
                                <li>Social Media Graphics & Templates</li>
                                <li>Smartphone & Pro Video Editing</li>
                                <li>Motion Design for Reels & Ads</li>
                            </ul>
                        </div>
                        <div class="card-action">
                            <a href="/contact" class="blue-text text-darken-2">Book a Creative Briefing Call</a>
                        </div>
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="col s12 m4">
                    <div class="card service-card">
                        <div class="card-content">
                            <span class="card-title">🔹 Business Consulting & Training</span>
                            <p>Operational clarity for founders and teams.</p>
                            <ul>
                                <li>Digital Tool Audits & Strategy Sessions</li>
                                <li>SOP Development & Workflow Coaching</li>
                                <li>Team Training on Tools Like ClickUp, Notion & Canva</li>
                            </ul>
                        </div>
                        <div class="card-action">
                            <a href="/contact" class="blue-text text-darken-2">Book a Strategy Session</a>
                        </div>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="col s12 m4">
                    <div class="card service-card">
                        <div class="card-content">
                            <span class="card-title">🔹 No-Code Workflow Automation</span>
                            <p>Spend less time managing, more time growing.</p>
                            <ul>
                                <li>ClickUp Workspace Builds</li>
                                <li>Notion Dashboards & Knowledge Hubs</li>
                                <li>Automations via Zapier & Make</li>
                            </ul>
                        </div>
                        <div class="card-action">
                            <a href="/contact" class="blue-text text-darken-2">Book a Systems Call</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ServicesSection'
}
</script>