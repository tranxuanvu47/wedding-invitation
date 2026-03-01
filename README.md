# Hướng Dẫn Chỉnh Sửa Website Thiệp Cưới

Dưới đây là hướng dẫn chi tiết cách thay đổi thông tin trên mẫu thiệp cưới của bạn. Các file cần chỉnh sửa chủ yếu là **`index.html`** và **`script.js`**, cùng với thư mục **`images`**.

---

## 1. Chỉnh sửa Thông Tin Tên Cô Dâu & Chú Rể

**Trong file `script.js`:**
Tìm đến phần `const translations = { ... }` (khoảng dòng 23) và thay đổi tên trong cả hai ngôn ngữ `vi` (Tiếng Việt) và `en` (Tiếng Anh):

- `coupleNames`: Tên cặp đôi (lưu ý giữ đúng thẻ HTML bên trong).
- `groomName`, `brideName`

**Trong file `index.html`:**

- **Tiêu đề trang (Tab browser)**: Sửa tên trong thẻ `<title>` (dòng 6) và các thẻ `<meta ... title>` (dòng 7, 21, 40).
- **Phần mở đầu (Hero Section)**: Sửa tên trong thẻ `<h1 class="couple-names">` (khoảng dòng 142).
- **Phần Cảm ơn (Thank You)**: Sửa chữ trong `<p class="thankyou-names">` (dòng 420).
- **Phần Chân trang (Footer)**: Sửa chữ trong `<h3 class="footer-logo">` (dòng 547).

---

## 2. Chỉnh sửa Ngày Giờ & Cài đặt Đếm Ngược

**Trong file `script.js`:**

- Sửa biến `const WEDDING_DATE = new Date('2026-03-08T17:00:00+07:00');` ở dòng 2 thành ngày giờ tổ chức của bạn (Theo định dạng `YYYY-MM-DDTHH:mm:ss+07:00`).
- Cập nhật các văn bản ngày tháng như `weddingDay`, `weddingMonth`, `dateTimeRow`, `ceremonyTime` ở phần `translations` (dòng 27+, 95+).

**Trong file `index.html`:**

- Sửa phần hiển thị ngày giờ tại Hero banner trong thẻ `<span class="date-time-row">` (khoảng dòng 156-157).
- Sửa phần lịch trình ở mục Địa Điểm trong thẻ `<p data-translate="ceremonyTime">` (khoảng dòng 334).
- Sửa dòng chữ ngày ở footer `<p class="footer-date">` (dòng 548).
- Chỉnh sửa ngày trong phần mô tả chia sẻ meta (thẻ `<meta name="description">`, `og:description`, `twitter:description` - ở khoảng dòng 10, 24, 43).

---

## 3. Chỉnh sửa Địa Điểm & Bản Đồ

**Trong file `index.html`:**

- **Sửa tên và địa chỉ văn bản**: Tìm "LaAn Garden" và "471 Hùng Vương..." rồi thay bằng địa chỉ của bạn (khoảng dòng 163-165, 315-325, và 574-576 ở footer).
- **Bản đồ Google Maps (Iframe)**: Thay thế link trong thuộc tính `src="..."` của thẻ `<iframe class="location-map">` (khoảng dòng 340) bằng link embed Google Maps của bạn (Mở Google Maps > Chia sẻ > Nhúng bản đồ > Copy link trong `src`).
- **Nút Chỉ đường (Nút bấm trong phần Địa Điểm)**: Sửa đường link Google Maps trong phần `window.open('...', '_blank')` của Nút bấm (khoảng dòng 352).
- **Nút Bản đồ nổi (Nút tròn nhỏ góc dưới cùng)**: Sửa đường link `href="..."` trong thẻ `<a class="fab-btn fab-map">` (dòng 654).

**Trong file `script.js`:**

- Sửa `venueName`, `venueSubtitle`, `addressLabel` trong cả 2 phần `vi` và `en` của danh sách dịch.

---

## 4. Chỉnh sửa Ảnh (Hình ảnh & Thư viện)

**Thay thế ảnh trực tiếp:**
Bạn có thể copy ảnh của bạn vào thư mục `images/` và đặt tên giống với các file có sẵn để nó tự ghi đè, HOẶC chép ảnh mới vào và sửa link trong code:

- **Ảnh Cô Dâu/Chú Rể (Giới thiệu)**: Sửa đường dẫn `src="images/LONG9263.jpg"` và `images/LONG9255.jpg` trong `index.html` (dòng 219, 234).
- **Ảnh Lịch trình (Timeline)**: Thay file `images/timeline.png` (dòng 266).
- **Ảnh Địa điểm**: Thay file `images/dia-diem.jpg` (dòng 312).

**Thư viện ảnh cưới (Gallery - Album 3 ảnh trượt)**:
**Trong file `script.js`:**

- Copy tất cả file ảnh cưới của bạn vào thư mục `images/`.
- Mở `script.js`, dòng 11 cập nhật lại danh sách tên file ở mảng `const imageFiles = [...]`.
- Sửa tổng số lượng ảnh ở `const TOTAL_IMAGES = ...;` (dòng 3).

**Ảnh đại diện khi chia sẻ Link (Facebook, Zalo)**:
Trong `index.html` (dòng 29, 48), thay link tại thẻ `og:image` và `twitter:image` bằng url ảnh của bạn (Lưu ý phải là **Link đầy đủ dạng `https://...`** sau khi đã public website).

---

## 5. Chỉnh sửa Số Điện Thoại (Nút Gọi Chữ Ký & Footer)

**Trong file `index.html`:**

- **Nút bấm nổi (Nút điện thoại góc dưới cùng)**: Ở dòng 625, sửa lại `href="tel:SỐ_ĐIỆN_THOẠI"` và chữ hiển thị bên trong.
  Ví dụ: `href="tel:09xxx"` và tên "Cô Dâu — 09xxx".
- **Phần Chân trang (Footer)**: Cuộn xuống dòng 581, sửa các đoạn text `📞 Chú rể: 032xxxx` và `📞 Cô dâu: 093xxxx`.

---

## 6. Liên kết với Google Sheets (Gửi Lời Chúc & RSVP)

Khi bạn có sẵn file Google Apps Script để nhận dữ liệu:
**Trong file `script.js`:**

- Tìm đến dòng số 8: `const GOOGLE_SHEETS_URL = '...'`
- Thay đường link trong ngoặc kép bằng đường link script ứng dụng mà Google Apps Script đã cung cấp (`https://script.google.com/macros/s/.../exec`).

---

✨ _Chúc các bạn tùy chỉnh website thành công cho ngày trọng đại của mình nhé!_ 💕
