from selenium import webdriver
from selenium.webdriver.support.ui import Select
monthlist=["January","February","March","April","May","June","July","August","September","October","November","December"]
daylist=['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
chrome_driver_location='D:\Hussain projects\chromedriver'
driver = webdriver.Chrome(chrome_driver_location)
driver.get('https://examinationboard.aku.edu/services/Pages/online-results.aspx')
driver.find_element_by_id('caniconimgs').click()
examination= Select(driver.find_element_by_id('ctl00_ctl54_g_7ac7e759_a48d_419b_bb00_9ac71224453d_ctl00_ddlexamtypecandidate'))
examination.select_by_value('H2102')
driver.find_element_by_id('ctl00_ctl54_g_7ac7e759_a48d_419b_bb00_9ac71224453d_ctl00_rollnumber').send_keys('26595')
year=Select(driver.find_element_by_id('ctl00_ctl54_g_7ac7e759_a48d_419b_bb00_9ac71224453d_ctl00_ddlYear'))
year.select_by_value('2003')
for i in monthlist:
    month=Select(driver.find_element_by_id('ctl00_ctl54_g_7ac7e759_a48d_419b_bb00_9ac71224453d_ctl00_ddlMonth'))
    month.select_by_visible_text(i)
    for item in daylist:
        day=Select(driver.find_element_by_id('ctl00_ctl54_g_7ac7e759_a48d_419b_bb00_9ac71224453d_ctl00_ddlDay'))
        day.select_by_visible_text(item)
        driver.find_element_by_id('ctl00_ctl54_g_7ac7e759_a48d_419b_bb00_9ac71224453d_ctl00_lbkbtnsubmit').click()        