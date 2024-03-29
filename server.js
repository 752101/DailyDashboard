const express = require('express')
var _express2 = _interopRequireDefault(express);
const app = express()
var path = require('path');
var bodyParser = require('body-parser');
var pgp = require('pg-promise')(/*options*/)

var request = require("request");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
// compress all routes
//
// // view engine setup and public static directory
app.set('views', path.join(__dirname, 'views'));
//app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'lib/public')));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

app.get('/hello', function (req, res, next) {
try
{
console.log(irn);
var boddy = "sysparm_inline_embed=true&sysparm_report_designer_builder=true&sysparm_type=list&sysparm_table=task&sysparm_field=&sysparm_field_list=number%2Cactive%2Cactivity_due%2Cadditional_assignee_list%2Capproval%2Capproval_history%2Capproval_set%2Cassigned_to%2Cassignment_group%2Cbusiness_duration%2Cpriority%2Csys_created_on%2Cstate%2Curgency%2Cshort_description%2Ctime_worked%2Cparent&sysparm_full_query=assignment_group%3De545d6270f410200daf9f18ce1050ef2%5EORassignment_group%3D628cb05878d49180d42b557954c2e956%5EORassignment_group%3Da724bf4d0f5852c0c817a218b1050ed5%5EORassignment_group%3D66cf931f0f2e028024dc6509b1050e5c%5EORassignment_group%3Df4d3bb330fcf76c0caf36509b1050eeb%5EORassignment_group%3Db28cb05878d49180d42b557954c2e996%5EORassignment_group%3Dae543a96dbb09b84fa9ed670cf961953%5EORassignment_group%3Dc667f692db349b84fa9ed670cf961973%5Esys_created_on%3Cjavascript%3Ags.dateGenerate('2018-04-01'%2C'00%3A00%3A00')%5Eclosed_atBETWEENjavascript%3Ags.dateGenerate('2018-04-01'%2C'00%3A00%3A00')%40javascript%3Ags.dateGenerate('2018-04-30'%2C'23%3A59%3A59')%5EORref_incident.resolved_atBETWEENjavascript%3Ags.dateGenerate('2018-04-01'%2C'00%3A00%3A00')%40javascript%3Ags.dateGenerate('2018-04-30'%2C'23%3A59%3A59')&sysparm_query=assignment_group%3De545d6270f410200daf9f18ce1050ef2%5EORassignment_group%3D628cb05878d49180d42b557954c2e956%5EORassignment_group%3Da724bf4d0f5852c0c817a218b1050ed5%5EORassignment_group%3D66cf931f0f2e028024dc6509b1050e5c%5EORassignment_group%3Df4d3bb330fcf76c0caf36509b1050eeb%5EORassignment_group%3Db28cb05878d49180d42b557954c2e996%5EORassignment_group%3Dae543a96dbb09b84fa9ed670cf961953%5EORassignment_group%3Dc667f692db349b84fa9ed670cf961973%5Esys_created_on%3Cjavascript%3Ags.dateGenerate('2018-04-01'%2C'00%3A00%3A00')%5Eclosed_atBETWEENjavascript%3Ags.dateGenerate('2018-04-01'%2C'00%3A00%3A00')%40javascript%3Ags.dateGenerate('2018-04-30'%2C'23%3A59%3A59')%5EORref_incident.resolved_atBETWEENjavascript%3Ags.dateGenerate('2018-04-01'%2C'00%3A00%3A00')%40javascript%3Ags.dateGenerate('2018-04-30'%2C'23%3A59%3A59')&sysparm_additional_groupby=&sysparm_interactive_report=&sysparm_report_source_id=&sysparm_view=rpt-tempde345c2b13a957840961bbc76144b0393f1fc5887c99e580e265cabb3396c747&show_empty=false&sysparm_nostack=true&ni.nolog.x_referer=ignore&x_referer=sys_report_template.do%3Fjvar_report_id%3Dde345c2b13a957840961bbc76144b039%26jvar_selected_tab%3DmyReports%26jvar_list_order_by%3D%26jvar_list_sort_direction%3D%26sysparm_reportquery%3D%26jvar_search_created_by%3D%26jvar_search_table%3D%26jvar_search_report_sys_id%3D%26jvar_report_home_query%3D&sysparm_direct=true&sysparm_processor=&sysparm_scope=global&jvar_report_id=";
var options11 = {
 headers:  {
  'Content-Type': 'application/x-www-form-urlencoded',},
  'url': "https://lilly.service-now.com/report_viewer.do?"+boddy,
  'xhrFields': { withCredentials: true },
  'data': "",
  'method': 'POST'
}

request(options11, function (error, response, body) {
console.log(body);
res.send(body);
});
}
  catch (e) {

  }
});

app.listen(process.env.PORT || 8081, () => console.log('All is right!'))
