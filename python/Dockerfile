# Sử dụng hình ảnh chính thức của Python
FROM python:3.9-slim

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép các file yêu cầu vào thư mục làm việc
COPY requirements.txt .

# Cài đặt các package từ file requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Sao chép toàn bộ mã nguồn của bạn vào thư mục làm việc
COPY . .

# Đảm bảo start.sh có quyền thực thi
RUN chmod +x start.sh

# Lệnh chạy khi container khởi động
CMD ["./start.sh"]
