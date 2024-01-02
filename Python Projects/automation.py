from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
monthlist=["January","February","March","April","May","June","July","August","September","October","November","December"]
daylist=['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
chrome_driver_location='D:\Hussain projects\chromedriver'
options = webdriver.ChromeOptions()
options.add_argument("--ignore-ssl-errors")
options.add_argument("--ignore-certificate-errors")
options.add_argument('--ignore-certificate-errors-spki-list')
options.add_experimental_option("detach", True)
driver = webdriver.Chrome(chrome_driver_location,chrome_options=options)
driver = webdriver.Chrome(chrome_options=options)
driver.get('https://examinationboard.aku.edu/services/Pages/online-results.aspx')
driver.find_element(By.ID,'caniconimgs').click()
examination= Select(driver.find_element(By.ID,'ctl00_ctl54_g_ad4b3cac_a6eb_43fc_99fc_493f0a9e9b70_ctl00_ddlexamtypecandidate'))
examination.select_by_value('H2201')
driver.find_element(By.ID,'ctl00_ctl54_g_ad4b3cac_a6eb_43fc_99fc_493f0a9e9b70_ctl00_rollnumber').send_keys('31315')
year=Select(driver.find_element(By.ID,'ctl00_ctl54_g_ad4b3cac_a6eb_43fc_99fc_493f0a9e9b70_ctl00_ddlYear'))
year.select_by_value('2005')
for i in monthlist:
    month=Select(driver.find_element(By.ID,'ctl00_ctl54_g_ad4b3cac_a6eb_43fc_99fc_493f0a9e9b70_ctl00_ddlMonth'))
    month.select_by_visible_text(i)
    for item in daylist:
        day=Select(driver.find_element(By.ID,'ctl00_ctl54_g_ad4b3cac_a6eb_43fc_99fc_493f0a9e9b70_ctl00_ddlDay'))
        day.select_by_visible_text(item)
        driver.find_element(By.ID,'ctl00_ctl54_g_ad4b3cac_a6eb_43fc_99fc_493f0a9e9b70_ctl00_lbkbtnsubmit').click()        