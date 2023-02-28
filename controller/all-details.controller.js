// Get all details
const fs = require("fs");

exports.getDetails = async (req, res) => {
  // Header-Footer Data
  // const data1 = fs.readFileSync("./html/1.html", "utf-8");
  // const html_header = data1.replace(/<\/?(html)[^>]*>/gi, "").trim();

  // const data2 = fs.readFileSync("./html/2.html", "utf-8");
  // const html_footer = data2.replace(/<\/?(html)[^>]*>/gi, "").trim();

  // Header Footer
  const headerFooter = require("../models/header_footer.model");
  const header_footer = await headerFooter.findOne(
    {},
    { _id: 0, __v: 0, status_Id: 0 }
  );
  const header = header_footer.header;
  const footer = header_footer.footer;

  // const header_status = fs.readFileSync("./text/header_status.txt", "utf8");
  // const footer_status = fs.readFileSync("./text/footer_status.txt", "utf8");

  // Opentab Data
  // const urlData = fs.readFileSync("./text/url.txt", "utf8");
  const openTabModel = require("../models/opentab_model");
  const openTabData = await openTabModel.findOne(
    {},
    { _id: 0, __v: 0, urlId: 0 }
  );

  // Default settings
  // const defaultsettings = fs.readFileSync("./text/default.txt", "utf8");
  const defaultSettingsModel = require("../models/default_setting.model");
  const defaultsettings = await defaultSettingsModel.findOne(
    {},
    { _id: 0, __v: 0, urlId: 0 }
  );

  // Version Control
  const versionControlModel = require("../models/version_control.model");
  const versioncontrol = await versionControlModel.findOne(
    {},
    { _id: 0, __v: 0, vcId: 0 }
  );

  // Installed reports
  const HitCount = require("../models/installed_reports_model");
  const installedReports = await HitCount.findOne({}, { _id: 0, __v: 0 });

  if (
    !header &&
    !footer &&
    !openTabData &&
    !defaultsettings &&
    !installedReports &&
    !versioncontrol
  ) {
    res.status(404).send({
      code: 404,
      status: "Not Found",
      header_status: header_footer.header_status,
      header_text: "header data is not available",
      footer_status: header_footer.footer_status,
      footer_text: "footer data is not available",
      open_tab_data: "urlData is not available",
      default_settings_data: "Default Settings Data is not available",
      installedReports: "installedReports Data is not available",
      versioncontrol: "versionControl Data is not available",
    });
  } else {
    res.status(200).send({
      code: 200,
      status: "Success",
      header_footer_data: {
        header_text: header_footer.header,
        header_status: header_footer.header_status,
        footer_text: header_footer.footer,
        // footer_text: footer.replaceAll("\\", "").trim(),
        footer_status: header_footer.footer_status,
      },
      open_tab_data: openTabData,
      default_settings_data: defaultsettings,
      version_Control_data: versioncontrol,
      installedReports: installedReports,
    });
  }
};
