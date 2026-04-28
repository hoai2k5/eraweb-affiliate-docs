# ⚙️ Hướng Dẫn Vận Hành & Quản Trị Affiliate (Dành Cho Admin)

Tài liệu này hướng dẫn Quản trị viên (Admin) cách thiết lập, vận hành chiến dịch và quản lý mạng lưới Cộng tác viên (Affiliate) trên hệ thống Eraweb theo một quy trình chuẩn xác nhất.

---

## GIAI ĐOẠN 1: THIẾT LẬP HỆ THỐNG (SETUP)
*Các bước nền tảng cần thực hiện trước khi chạy chương trình Affiliate.*

### 1. Thiết Lập Cấu Hình Chung (Global Configuration)
Truy cập menu **Marketing -> Affiliate -> Config**.
Đây là nơi quy định các "luật chơi" chung cho toàn bộ mạng lưới:
* **Default Commission (%) - Hoa hồng mặc định:** Áp dụng cho toàn bộ sản phẩm không nằm trong chiến dịch đặc biệt. 
* **Settlement Hold Period (Days) - Thời gian tạm giữ:** Số ngày hệ thống "giam" tiền hoa hồng (trạng thái Holding) sau khi đơn hàng thành công, đề phòng khách hàng hoàn trả. Hết thời gian này, tiền sẽ chuyển sang Khả dụng (Available).
* **Minimum Payout Threshold - Hạn mức rút tối thiểu:** Số dư Khả dụng tối thiểu mà CTV cần đạt để tạo lệnh rút tiền (VD: 50.000 VNĐ).

*Lưu ý: Thay đổi cấu hình chỉ áp dụng cho các giao dịch phát sinh TỪ THỜI ĐIỂM LƯU trở về sau, không làm thay đổi dữ liệu cũ.*

### 2. Cài Đặt Thông Báo Tự Động (ZNS)
Để hệ thống tự động chăm sóc CTV một cách chuyên nghiệp, hãy thiết lập ZNS tại mục **Settings -> Notifications**.
1. Chọn Tab **ZNS**.
2. Tìm đến các mẫu dành cho hệ thống Affiliate:
   * **OTP Verification:** Mã xác thực gửi đi lúc CTV đăng ký.
   * **Account Approved:** Thông báo chúc mừng khi tài khoản được duyệt.
   * **Account Locked:** Thông báo khi tài khoản bị khóa/hủy hợp tác.
3. Chọn Template đã được duyệt từ Zalo Cloud và bấm **Save General**.

---

## GIAI ĐOẠN 2: QUẢN LÝ MẠNG LƯỚI & CHIẾN DỊCH (MANAGE)
*Vận hành hàng ngày, thêm bớt đối tác và đẩy mạnh doanh số.*

### 3. Quản Lý Đối Tác (Affiliate Profiles)
Truy cập menu **Marketing -> Affiliate -> All Affiliates** để theo dõi và quản lý danh sách CTV. 

Tại bảng điều khiển, bạn có thể xem các thông tin: Tên đối tác, Email, Mã giới thiệu (Referral Code), Số dư khả dụng/Tạm giữ và Trạng thái tài khoản.

**Thiết lập mức hoa hồng riêng (Custom Commission cho KOLs/KOCs):**
1. Bấm vào tên Đối tác để mở bảng Edit.
2. Tại mục **Custom %**, nhập mức hoa hồng riêng (Ví dụ: 10%). 
3. Bấm **Lưu**. Mức % này sẽ ghi đè lên mức Hoa hồng mặc định của hệ thống khi CTV này bán được hàng.

### 4. Quản Lý Chiến Dịch (Campaigns)
Truy cập menu **Marketing -> Affiliate -> Campaign**. Chức năng này giúp bạn tạo các chương trình đẩy số cho từng sản phẩm cụ thể.
1. Bấm **Thêm mới (Add New)**.
2. Chọn Sản phẩm (Products) đưa vào chiến dịch.
3. Thiết lập mức Hoa hồng riêng cho chiến dịch này (thường cao hơn mức mặc định để kích cầu).
4. Hệ thống sẽ tự động cập nhật mức hoa hồng mới này lên giao diện Dashboard của CTV.

---

## GIAI ĐOẠN 3: THEO DÕI & PHÂN TÍCH (TRACK & ANALYZE)
*Giám sát đơn hàng, cơ chế chống gian lận và đánh giá hiệu quả.*

### 5. Cơ Chế Xử Lý Đơn Hàng & Chống Gian Lận (Anti-Fraud)
Hệ thống xử lý đơn hàng hoàn toàn tự động dựa trên các nguyên tắc nghiêm ngặt:

**🏆 Tháp Ưu Tiên Tính Hoa Hồng (Từ cao xuống thấp):**
1. **Coupon Affiliate:** Khách dùng Mã giảm giá riêng của CTV.
2. **Campaign (Chiến dịch):** Sản phẩm nằm trong chiến dịch đặc biệt.
3. **Custom % (Cá nhân hóa):** CTV được Admin cài đặt mức % riêng.
4. **Default Commission:** Mức cấu hình chung hệ thống.

**🛡️ Tính Năng Chống Gian Lận Tự Động:**
Hệ thống tự động kiểm tra chéo thông tin Khách mua hàng (SĐT, Email) với thông tin của CTV. Nếu trùng khớp (hành vi tự mua hàng lấy hoa hồng), lệnh hoa hồng vẫn được tạo để lưu vết nhưng sẽ bị gắn cờ `[INVALID]` (Không hợp lệ) và **Hoa hồng = 0**.

### 6. Xem Báo Cáo Thống Kê (Affiliate Report)
Truy cập menu **Reports -> Affiliate** để có cái nhìn toàn cảnh về hiệu suất mạng lưới:
* **Các chỉ số tổng quan (KPIs):** Doanh thu thực tế (Total Revenue), Hoa hồng phải trả (Total Commission), Số CTV đang hoạt động (Active Partners), và Tổng tiền đang chờ thanh toán (Pending Payouts).
* **Biểu đồ Tương quan:** Trực quan hóa Doanh thu và Chi phí hoa hồng theo thời gian thực.
* **Bảng xếp hạng (Leaderboards):** Theo dõi Top 5 CTV hoạt động hiệu quả nhất và Top 5 Sản phẩm bán chạy nhất để có chiến lược kinh doanh phù hợp.

---

## GIAI ĐOẠN 4: TÀI CHÍNH & THANH TOÁN (FINANCE)
*Xử lý đối soát và chuyển khoản cho Cộng tác viên.*

### 7. Quản Lý Yêu Cầu Rút Tiền (Payouts)
Đây là phân hệ nhạy cảm liên quan đến dòng tiền. Truy cập menu **Marketing -> Affiliate -> Payouts**.

**🛡️ Nguyên Tắc Bảo Mật Kế Toán Khắt Khe:**
1. **Cấm tự tạo lệnh:** Admin/Kế toán KHÔNG THỂ tự tạo lệnh rút tiền thủ công. Mọi lệnh rút BẮT BUỘC phải do chính CTV thao tác từ trang của họ.
2. **Cấm xóa dữ liệu:** Tính năng [Xóa] bị vô hiệu hóa hoàn toàn đối với lịch sử Rút tiền. Mọi giao dịch tài chính đều được lưu vết vĩnh viễn.

**📝 Quy Trình Xử Lý Lệnh Rút Tiền:**
1. Khi CTV đặt lệnh, số dư của họ lập tức bị trừ.
2. Kế toán click vào Mã Payout (VD: `#1024`) để kiểm tra thông tin ngân hàng (hệ thống đã lưu Snapshot thông tin thẻ ngay tại thời điểm CTV bấm rút).
3. **Nếu chuyển khoản thành công:** Chuyển trạng thái sang **1 - Paid (Đã thanh toán)**.
4. **Nếu thông tin sai lệch (Sai tên/STK):** Chuyển trạng thái sang **2 - Rejected (Từ chối)** và ghi rõ lý do. Ngay lập tức, hệ thống sẽ **Tự động Hoàn tiền (Auto-Refund)** trả lại số tiền đó vào Số dư khả dụng của CTV để họ cập nhật thông tin và rút lại.